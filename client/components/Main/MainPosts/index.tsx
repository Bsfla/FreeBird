import React from 'react';
import { getPosts } from '@apis/post';
import { PostList, PostEndBar } from '@components/index';
import { PostType } from '@lib/types';
import { useInfiniteScroll } from '@hooks/common';
import { queryKeys } from '@consts/queryKeys';

const MainPosts = () => {
  const { ref, resultData: posts } = useInfiniteScroll<PostType[]>(
    queryKeys.posts,
    getPosts
  );
  console.log(posts);
  return (
    <>
      {posts && <PostList posts={posts} />}
      <PostEndBar endPost={ref} />
    </>
  );
};

export default MainPosts;
