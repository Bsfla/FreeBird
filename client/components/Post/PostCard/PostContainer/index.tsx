import React from 'react';
import { PostHeader, Wrraper } from './style';
import { PostType } from '@lib/types';
import PostContent from '../PostContent';
import { PostImage, WriteInfo } from '@components/Post';

interface Props {
  post: PostType;
}

const PostContainer = ({ post }: Props) => {
  return (
    <Wrraper>
      <PostHeader>
        <WriteInfo nickName={post.User.nickname} date={post.createdAt} />
      </PostHeader>
      <PostContent post={post} />
      <PostImage images={post.Images} />
    </Wrraper>
  );
};

export default PostContainer;
