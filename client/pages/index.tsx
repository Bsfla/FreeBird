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
import { loadMyInfo } from '@apis/user';

const Main: NextPageWithLayout = () => {
  const { ref: endPost, resultData: posts } = useInfiniteScroll<PostType[]>(
    queryKeys.posts,
    getPosts
  );
  return (
    <>
      <PostForm />
      {posts !== undefined && <PostList posts={posts} endPost={endPost} />}
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

  const result: any = await loadMyInfo();

  if (result.response?.status === 401)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

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
