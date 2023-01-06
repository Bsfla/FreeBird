import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { PostCard, CommentForm, MainLayout } from '@components/index';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { queryKeys } from '@consts/queryKeys';
import { getPost } from '@apis/post';
import { PostType } from '@lib/types';

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
      <CommentForm />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const postId = context.params?.id;

  if (postId)
    await queryClient.prefetchQuery([queryKeys.post, postId], () =>
      getPost(Number(postId))
    );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Post;
