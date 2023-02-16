import React, { useState } from 'react';
import { Wrraper } from './style';
import { PostType } from '@lib/types';
import PostButtonGroup from './PostButtonGroup';
import PostContainer from './PostContainer';
import PostEditForm from '../PostForm/PostEditForm';
import { PostImageCarousel } from '@components/index';
import Link from 'next/link';
import { POST_PAGE } from '@consts/route';

interface Props {
  post: PostType;
}

const PostCard = ({ post }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleToggleEdit = (
    e: React.MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();

    setIsEdit(!isEdit);
  };

  if (isEdit) {
    return (
      <PostEditForm
        post={post}
        handleToggleEdit={handleToggleEdit}
        setIsEdit={setIsEdit}
      />
    );
  }

  return (
    <>
      <Wrraper>
        <PostContainer post={post} />
        <PostButtonGroup post={post} handleToggleEdit={handleToggleEdit} />
      </Wrraper>
      <PostImageCarousel images={post.Images} />
    </>
  );
};

export default PostCard;
