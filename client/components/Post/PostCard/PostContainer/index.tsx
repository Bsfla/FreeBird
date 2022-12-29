import React from 'react';
import { Wrraper, PostHead, PostInfo } from './style';
import { ProfileImage } from '@components/common';
import { PostType } from '@lib/types';
import PostContent from '../PostContent';
import { PostImage } from '@components/Post';

interface Props {
  post: PostType;
}

const PostContainer = ({ post }: Props) => {
  return (
    <Wrraper>
      <PostHead>
        <ProfileImage />
        <PostInfo>
          <span className="user_name">{post.User.nickname}</span>
          <span className="date">2022년 11월 29일</span>
        </PostInfo>
      </PostHead>
      <PostContent post={post} />
      <PostImage images={post.Images} />
    </Wrraper>
  );
};

export default PostContainer;
