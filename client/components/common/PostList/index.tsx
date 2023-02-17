import React from 'react';
import { Wrapper } from './style';
import { PostType } from '@lib/types';
import { PostCard, PostImageCarousel } from '@components/index';
import { useModal } from '@hooks/common';
import { modalName } from '@consts/modal';

interface Props {
  posts: PostType[];
}

const PostList = ({ posts }: Props) => {
  const modalProps = useModal(modalName.POST_IMAGE);

  return (
    <Wrapper>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      <PostImageCarousel {...modalProps} />
    </Wrapper>
  );
};

export default PostList;
