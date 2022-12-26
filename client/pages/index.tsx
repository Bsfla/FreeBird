import React from 'react';
import { MainLayout } from '@components/common';
import { PostForm } from '@components/Post';
import { MainPosts } from '@components/Main';
import { dehydrate, QueryClient } from 'react-query';
import { queryKeys, LOGIN_PAGE } from '@consts/index';
import type { GetServerSideProps, NextPage } from 'next';
import { getPosts } from '@apis/post';
import axios from 'axios';

const Main: NextPage = () => {
  return (
    <MainLayout>
      <PostForm />
      <MainPosts />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  const queryClient = new QueryClient();

  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;

    await queryClient.prefetchInfiniteQuery(queryKeys.posts, () => getPosts());
  } else {
    return { redirect: { destination: LOGIN_PAGE, permanent: false } };
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),

    },
  };
};

export default Main;
