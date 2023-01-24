import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { PostCard, CommentContainer, MainLayout } from '@components/index';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { queryKeys } from '@consts/queryKeys';
import { getPost } from '@apis/post';
import { PostType } from '@lib/types';
import { getComments } from '@apis/comment';

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: post } = useQuery<PostType>(
    [queryKeys.post, id],
    () => getPost(Number(id)),
    {
      staleTime: 1000 * 60 * 60 * 2,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <MainLayout>
      {post && <PostCard post={post} />}
      {post && <CommentContainer post={post} />}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
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
