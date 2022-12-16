import React from 'react';
import {
  Wrraper,
  PostInfo,
  PostHead,
  PostContent,
  PostHashTag,
  PostButtonGroup,
  RetwwetButton,
  LikeButton,
  CommentButton,
} from './style';
import { PostType } from '@lib/types';
import { ProfileImage } from '@components/common';
import { PostImage } from '@components/Post';
import {
  AiOutlineRetweet,
  AiTwotoneHeart,
  AiOutlineComment,
} from 'react-icons/ai';
import Link from 'next/link';

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
      </PostContent>
      <PostImage images={post.Images} />
      <PostButtonGroup>
        <RetwwetButton>
          <AiOutlineRetweet size={22} />
          <span>12</span>
        </RetwwetButton>
        <LikeButton>
          <AiTwotoneHeart size={22} />
          <span>12</span>
        </LikeButton>
        <CommentButton>
          <AiOutlineComment size={22} />
          <span>12</span>
        </CommentButton>
      </PostButtonGroup>
    </Wrraper>
  );
};

export default PostCard;
