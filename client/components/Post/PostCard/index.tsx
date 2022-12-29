import React from 'react';
import { PostHead, PostInfo, Wrraper, SharePostBlock } from './style';
import { PostType } from '@lib/types';
import PostButtonGroup from './PostButtonGroup';
import PostContainer from './PostContainer';
import { ProfileImage } from '@components/common';

interface Props {
  post: PostType;
}

const PostCard = ({ post }: Props) => {
  if (post.RetweetId && post.Retweet) {
    const { Retweet: sharePost } = post;

    return (
      <Wrraper>
        <PostHead>
          <ProfileImage />
          <PostInfo>
            <span className="user_name">{post.User.nickname}</span>
            <span className="date">2022년 11월 29일</span>
          </PostInfo>
        </PostHead>
        <SharePostBlock>
          <PostContainer post={sharePost} />
        </SharePostBlock>
        <PostButtonGroup post={post} />
      </Wrraper>
    );
  }

  return (
    <Wrraper>
      <PostContainer post={post} />
      <PostButtonGroup post={post} />
    </Wrraper>
  );
};

export default PostCard;
