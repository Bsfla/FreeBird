import React from 'react';
import {
  MainLayout,
  PostList,
  PostEndBar,
  SearchPostIntroBar,
} from '@components/index';
import { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient, useInfiniteQuery } from 'react-query';
import { queryKeys } from '@consts/queryKeys';
import { customAxios } from '@apis/base';
import { searchPosts } from '@apis/post';
import { useRouter } from 'next/router';
import { useInfiniteScroll } from '@hooks/index';
import { PostType } from '@lib/types';

const Search: NextPage = () => {
  const router = useRouter();
  const hashtag = router.query.hashtag as string;
  const { ref, resultData: posts } = useInfiniteScroll<PostType[]>(
    queryKeys.posts,
    searchPosts,
    hashtag
  );

  return (
    <MainLayout>
      <SearchPostIntroBar hashtag={hashtag} />
      {posts && <PostList posts={posts} />}
      <PostEndBar endPost={ref} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  customAxios.defaults.headers.Cookie = '';
  const queryClient = new QueryClient();
  const hashtagName = context.params?.hashtag as string;

  if (hashtagName && cookie) {
    customAxios.defaults.headers.Cookie = cookie;

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