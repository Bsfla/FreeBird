import React from 'react';
import { Wrraper, SharePostBlock } from './style';
import { PostType } from '@lib/types';
import PostButtonGroup from './PostButtonGroup';
import PostContainer from './PostContainer';
import { WriteInfo } from '@components/Post';

interface Props {
  post: PostType;
}

const PostCard = ({ post }: Props) => {
  if (post.RetweetId && post.Retweet) {
    const { Retweet: sharePost, User: user } = post;

    return (
      <Wrraper>
        <WriteInfo nickName={user.nickname} />
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
