import React from 'react';
import { PostHeader, SharePostBlock, Wrraper } from './style';
import { PostType } from '@lib/types';
import PostContent from '../PostContent';
import { PostImage, WriteInfo } from '@components/Post';
import { POST_PAGE, PROFILE_PAGE } from '@consts/route';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  post: PostType;
}

const PostContainer = ({ post }: Props) => {
  const router = useRouter();
  const handleRoutePost =
    (id: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      router.push(`${POST_PAGE}/${id}`);
    };
  if (post.RetweetId && post.Retweet) {
    const { Retweet: sharePost, User: user } = post;

    return (
      <Wrraper onClick={handleRoutePost(post.id)}>
        <WriteInfo
          nickName={user.nickname}
          date={post.createdAt}
          imgPath={user.ProfileImage}
          writerId={post.User.id}
        />
        <SharePostBlock onClick={(e) => handleRoutePost(sharePost.id)}>
          <PostContainer post={sharePost} />
        </SharePostBlock>
      </Wrraper>
    );
  }

  return (
    <Wrraper onClick={handleRoutePost(post.id)}>
      <PostHeader onClick={(e) => e.stopPropagation()}>
        <WriteInfo
          nickName={post.User.nickname}
          date={post.createdAt}
          imgPath={post.User.ProfileImage}
          writerId={post.User.id}
        />
      </PostHeader>
      <PostContent post={post} />
      {post.Images.length > 0 && <PostImage images={post.Images} />}
    </Wrraper>
  );
};

export default PostContainer;
