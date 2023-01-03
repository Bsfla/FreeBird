import React, { useEffect } from 'react';
import { getPosts } from '@apis/post';
import { PostList } from '@components/common';
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
      {posts && <PostList posts={posts} />}
      <div ref={ref} />
    </>
  );
};

export default MainPosts;
