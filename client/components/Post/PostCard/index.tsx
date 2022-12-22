import React from 'react';
import { Wrraper, PostInfo, PostHead, PostContent, PostHashTag } from './style';
import { PostType } from '@lib/types';
import { ProfileImage } from '@components/common';
import { PostImage } from '@components/Post';
import Link from 'next/link';

import PostButtonGroup from './PostButtonGroup';

interface Props {
  post: PostType;
}

const PostCard = ({ post }: Props) => {
  return (
    <Wrraper>
      <PostHead>
        <ProfileImage />
        <PostInfo>
          <span className="user_name">{post.User.nickname}</span>
          <span className="date">2022년 11월 29일</span>
        </PostInfo>
      </PostHead>
      <PostContent>
        {post.content.split(/(#[^\s#]+)/g).map((v: string, index: number) => {
          if (!v.match(/(#[^\s#]+)/)) {
            return <span key={index}>{v}</span>;
          }
        })}
        <PostHashTag>
          {post.Hashtags?.map((el) => (
            <span key={el.name}>#{el.name}</span>
          ))}
        </PostHashTag>
      </PostContent>
      <PostImage images={post.Images} />
      <PostButtonGroup post={post} />
    </Wrraper>
  );
};

export default PostCard;
