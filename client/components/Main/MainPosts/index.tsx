import React from 'react';
import { getPosts } from '@apis/post';
import { PostList, NotList } from '@components/index';
import { PostType } from '@lib/types';
import { useInfiniteScroll } from '@hooks/common';
import { queryKeys } from '@consts/queryKeys';

const MainPosts = () => {
  const { ref, resultData: posts } = useInfiniteScroll<PostType[]>(
    queryKeys.posts,
    getPosts
  );

  return (
    <>
      {posts?.length ? <PostList posts={posts} endPost={ref} /> : <NotList />}
    </>
  );
};

export default MainPosts;
