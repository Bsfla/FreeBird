import React from 'react';
import { MainLayout } from '@components/common';
import { PostForm, PostCard } from '@components/Post';
import { dehydrate, QueryClient, useInfiniteQuery } from 'react-query';
import type { GetServerSideProps, NextPage } from 'next';
import { getPosts } from '@apis/post';
import axios from 'axios';

const Main: NextPage = () => {
  const { data } = useInfiniteQuery(
    'posts',
    ({ pageParam = '' }) => getPosts(pageParam),
    {
      staleTime: 300000,
      refetchOnWindowFocus: false,
    }
  );

  console.log(data);

  return (
    <MainLayout>
      <PostForm />
      <PostCard />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  } else {
    return { redirect: { destination: '/Login', permanent: false } };
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery('posts', () => getPosts());

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Main;
