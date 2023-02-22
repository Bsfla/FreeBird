import React from 'react';
import { Wrapper } from './style';
import { PostType } from '@lib/types';
import { PostCard, PostImageCarousel, PostEndBar } from '@components/index';
import { useModal } from '@hooks/common';
import { modalName } from '@consts/modal';

interface Props {
  posts: PostType[];
  endPost: (node?: Element | null | undefined) => void;
}

const PostList = ({ posts, endPost }: Props) => {
  const modalProps = useModal(modalName.POST_IMAGE);

  return (
    <Wrapper>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      <PostEndBar endPost={endPost} />
      <PostImageCarousel {...modalProps} />
    </Wrapper>
  );
};

export default PostList;
