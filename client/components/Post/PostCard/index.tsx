import React from 'react';
import { Wrraper, SharePostBlock } from './style';
import { PostType } from '@lib/types';
import PostButtonGroup from './PostButtonGroup';
import PostContainer from './PostContainer';
import { WriteInfo } from '@components/Post';
import Link from 'next/link';
import { POST_PAGE } from '@consts/route';

interface Props {
  post: PostType;
}

const PostCard = ({ post }: Props) => {
  if (post.RetweetId && post.Retweet) {
    const { Retweet: sharePost, User: user } = post;

    return (
      <Link href={`${POST_PAGE}/${post.id}`}>
        <Wrraper>
          <WriteInfo nickName={user.nickname} />
          <SharePostBlock>
            <PostContainer post={sharePost} />
          </SharePostBlock>
          <PostButtonGroup post={post} />
        </Wrraper>
      </Link>
    );
  }

  return (
    <Link href={`${POST_PAGE}/${post.id}`}>
      <Wrraper>
        <PostContainer post={post} />
        <PostButtonGroup post={post} />
      </Wrraper>
    </Link>
  );
};

export default PostCard;
