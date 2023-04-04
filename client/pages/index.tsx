import React, { ReactElement } from 'react';
import { MainLayout } from '@components/common/Layout';
import { PostForm } from '@components/Post';
import { dehydrate, QueryClient } from 'react-query';
import { queryKeys } from '@consts/index';
import type { GetServerSideProps } from 'next';
import { getPosts } from '@apis/post';
import { customAxios } from '@apis/base';
import { useInfiniteScroll } from '@hooks/common';
import { PostType } from '@lib/types';
import PostList from '@components/common/PostList';
import { NextPageWithLayout } from './_app';

const Main: NextPageWithLayout = () => {
  const { ref: endPost, resultData: posts } = useInfiniteScroll<PostType[]>(
    queryKeys.posts,
    getPosts
  );
  const array =
    'https://freebird-s3.s3.ap-northeast-2.amazonaws.com/original/1680530469519_%C3%AB%C2%82%C2%98%C3%AC%C2%99%C2%80%20%C3%AA%C2%B0%C2%80%C3%AC%C2%9E%C2%A5%20%C3%AC%C2%9E%C2%98%20%C3%AB%C2%A7%C2%9E%C3%AB%C2%8A%C2%94%20%C3%AC%C2%8B%C2%9D%C3%AB%C2%AC%C2%BC%20%C3%AC%C2%95%C2%84%C3%AC%C2%9D%C2%B4%C3%AB%C2%B9%C2%84.jpg';
  console.log(array.length);
  return (
    <>
      <PostForm />
      {posts?.length && <PostList posts={posts} endPost={endPost} />}
    </>
  );
};

Main.getLayout = function getLayout(page: ReactElement) {
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

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(queryKeys.posts, () =>
    getPosts({ lastId: 0 })
  );

  return {
    props: {},
  };
};

export default Main;
