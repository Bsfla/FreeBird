import React, { useState } from 'react';
import {
  AiOutlineRetweet,
  AiTwotoneHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from 'react-icons/ai';
import { SlOptions } from 'react-icons/sl';
import {
  ButtonGroup,
  RetwwetButton,
  LikeButton,
  CommentButton,
  Option,
} from './style';
import { PostType } from '@lib/types';
import { usePostLike, useSharePost } from '@hooks/index';
import Tooltip from '../Tooltip/index.';
import useDeletePost from '@hooks/page/useDeletePost';

interface Props {
  post: PostType;
  handleToggleEdit: (
    e: React.MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => void;
}

const PostButtonGroup = ({ post, handleToggleEdit }: Props) => {
  const { isLike, handleAddLike, handleDeleteLike } = usePostLike(post);
  const { handleSharePost } = useSharePost(post);
  const { handleDeletePost } = useDeletePost(post);
  const [isOpenOption, setIsOpenOption] = useState<boolean>(false);

  const handleToggleOption = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();

    setIsOpenOption(!isOpenOption);
  };

  return (
    <ButtonGroup>
      <RetwwetButton>
        <AiOutlineRetweet size={22} onClick={handleSharePost} />
        <span>12</span>
      </RetwwetButton>
      <LikeButton>
        {isLike ? (
          <AiTwotoneHeart
            size={22}
            className="like_heart"
            onClick={handleDeleteLike}
          />
        ) : (
          <AiOutlineHeart size={22} onClick={handleAddLike} />
        )}
        <span>{post.Likers.length}</span>
      </LikeButton>

      <CommentButton>
        <AiOutlineComment size={22} />
        <span>10</span>
      </CommentButton>

      <Option>
        <SlOptions size={22} onClick={handleToggleOption} />
        {isOpenOption && (
          <Tooltip
            setIsOpenOption={setIsOpenOption}
            handleToggleEdit={handleToggleEdit}
            handleDeletePost={handleDeletePost}
          />
        )}
      </Option>
    </ButtonGroup>
  );
};

export default PostButtonGroup;
