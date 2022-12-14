import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { getPosts } from '@apis/post';
import { PostList } from '@components/common';

const MainPosts = () => {
  const { data } = useInfiniteQuery(
    'posts',
    ({ pageParam = '' }) => getPosts(pageParam),
    {
      staleTime: 300000,
      refetchOnWindowFocus: false,
    }
  );

  console.log(data?.pages[0]);

  return <PostList posts={data?.pages[0]} />;
};

export default MainPosts;
