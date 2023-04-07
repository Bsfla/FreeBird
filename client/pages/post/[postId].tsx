import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { PostCard } from '@components/Post';
import CommentContainer from '@components/Post/Comment/CommentContainer';
import MainLayout from '@components/common/Layout/MainLayout';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { queryKeys } from '@consts/queryKeys';
import { getPost } from '@apis/post';
import { PostType } from '@lib/types';
import { getComments } from '@apis/comment';
import { NextPageWithLayout } from 'pages/_app';
import { customAxios } from '@apis/base';
import { loadMyInfo } from '@apis/user';

const Post: NextPageWithLayout = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data: post } = useQuery<PostType>([queryKeys.post, postId], () =>
    getPost(Number(postId))
  );

  return (
    <>
      {post && <PostCard post={post} />}
      {post && <CommentContainer post={post} />}
    </>
  );
};

Post.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  customAxios.defaults.headers.Cookie = '';
  const cookie = context.req ? context.req.headers.cookie : '';
  if (!cookie)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  customAxios.defaults.headers.Cookie = cookie;

  const result: any = await loadMyInfo();

  if (result.response?.status === 401)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  const queryClient = new QueryClient();
  const postId = context.params?.id;

  if (postId) {
    await Promise.all([
      queryClient.prefetchQuery([queryKeys.post, postId], () =>
        getPost(Number(postId))
      ),
      queryClient.prefetchQuery([queryKeys.comment, postId], () =>
        getComments(Number(postId))
      ),
    ]);
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Post;
