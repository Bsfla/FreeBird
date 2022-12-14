import React from 'react';
import { Wrapper } from './style';
import { PostType } from '@lib/types';
import { PostCard } from '@components/Post';

interface Props {
  posts: PostType[];
}

const PostList = ({ posts }: Props) => {
  return (
    <Wrapper>
      {posts?.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </Wrapper>
  );
};

export default PostList;
