import React, { ReactElement } from 'react';
import { SearchPostIntroBar } from '@components/index';
import { MainLayout } from '@components/common/Layout';
import PostList from '@components/common/PostList';
import { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { queryKeys } from '@consts/queryKeys';
import { customAxios } from '@apis/base';
import { searchPosts } from '@apis/post';
import { useRouter } from 'next/router';
import { useInfiniteScroll } from '@hooks/index';
import { PostType } from '@lib/types';
import NotList from '@components/common/NotList';
import { NextPageWithLayout } from 'pages/_app';
import { loadMyInfo } from '@apis/user';

const Search: NextPageWithLayout = () => {
  const router = useRouter();
  const hashtag = router.query.hashtag as string;
  const { ref: endPost, resultData: posts } = useInfiniteScroll<PostType[]>(
    queryKeys.posts,
    searchPosts,
    hashtag
  );

  return (
    <>
      <SearchPostIntroBar hashtag={hashtag} />
      {posts?.length ? (
        <PostList posts={posts} endPost={endPost} />
      ) : (
        <NotList />
      )}
    </>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  customAxios.defaults.headers.Cookie = '';

  if (!cookie)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  const queryClient = new QueryClient();
  const hashtagName = context.params?.hashtag as string;

  if (hashtagName && cookie) {
    customAxios.defaults.headers.Cookie = cookie;

    const result: any = await loadMyInfo();

    if (result.response?.status === 401)
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };

    await queryClient.prefetchInfiniteQuery(queryKeys.posts, () =>
      searchPosts({ paramId: hashtagName })
    );
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Search;
