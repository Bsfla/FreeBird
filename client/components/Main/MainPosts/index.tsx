import React, { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { getPosts } from '@apis/post';
import { PostList } from '@components/common';
import { PostType } from '@lib/types';
import { AxiosError } from 'axios';

const MainPosts = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    PostType[],
    AxiosError,
    PostType[]
  >('posts', ({ pageParam = '' }) => getPosts(pageParam), {
    getNextPageParam: (lastPage) => {
      return lastPage?.[lastPage.length - 1]?.id;
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  const [ref, inView] = useInView();
  const posts = data?.pages.flat();
  const isLast = data && data?.pages[data.pages.length - 1]?.length < 10;


  useEffect(() => {
    if (!isLast && hasNextPage && inView) fetchNextPage();
  }, [inView]);

  return (
    <>
      {data && <PostList posts={posts} />}
      <div ref={ref} />
    </>
  );
};

export default MainPosts;
