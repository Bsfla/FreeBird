import React from 'react';
import { MainLayout } from '@components/common/Layout';
import { PostForm } from '@components/Post';
import { MainPosts } from '@components/Main';
import { dehydrate, QueryClient } from 'react-query';
import { queryKeys, LOGIN_PAGE } from '@consts/index';
import type { GetServerSideProps, NextPage } from 'next';
import { getPosts } from '@apis/post';
import { loadMyInfo } from '@apis/user';
import { customAxios } from '@apis/base';

const Main = () => {
  return (
    <MainLayout>
      <PostForm />
      <MainPosts />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req?.headers.cookie
    ? context.req.headers.cookie
    : null;
  customAxios.defaults.headers.Cookie = '';
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(queryKeys.posts, () =>
    getPosts({ lastId: 0 })
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Main;
