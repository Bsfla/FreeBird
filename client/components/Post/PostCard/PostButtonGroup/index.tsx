import React, { useState } from 'react';
import {
  AiOutlineRetweet,
  AiTwotoneHeart,
  AiOutlineHeart,
} from 'react-icons/ai';
import { SlOptions } from 'react-icons/sl';
import { ButtonGroup, RetwwetButton, LikeButton, Option } from './style';
import { PostType } from '@lib/types';
import { useRecoilValue } from 'recoil';
import { userAtomState } from '@recoil/user';
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
  const user = useRecoilValue(userAtomState);
  const [isOpenOption, setIsOpenOption] = useState(false);

  const handleToggleOption = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();

    setIsOpenOption(!isOpenOption);
  };

  return (
    <ButtonGroup>
      <RetwwetButton>
        <AiOutlineRetweet size={22} onClick={handleSharePost} />
        <span>{post.Retweets.length}</span>
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
      {post.User.id === user.id && (
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
      )}
    </ButtonGroup>
  );
};

export default PostButtonGroup;
