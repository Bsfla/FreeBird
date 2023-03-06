import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { PostCard } from '@components/Post';
import CommentContainer from '@components/Post/Comment/CommentContainer';
import MainLayout from '@components/common/Layout/MainLayout';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { queryKeys } from '@consts/queryKeys';
import { getPost } from '@apis/post';
import { PostType } from '@lib/types';
import { getComments } from '@apis/comment';

const Post: NextPage = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data: post } = useQuery<PostType>([queryKeys.post, postId], () =>
    getPost(Number(postId))
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
