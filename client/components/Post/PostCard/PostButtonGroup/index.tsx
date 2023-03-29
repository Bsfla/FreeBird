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
  Option,
  CommentButton,
} from './style';
import { PostType } from '@lib/types';
import { useModal, usePostLike, useSharePost } from '@hooks/index';
import Tooltip from '../Tooltip/index.';
import useDeletePost from '@hooks/page/useDeletePost';
import { loadMyInfo } from '@apis/user';
import { queryKeys } from '@consts/queryKeys';
import { useQuery } from 'react-query';
import Link from 'next/link';
import { POST_PAGE } from '@consts/route';
import ConfirmModal from '@components/common/ConfirmModal';
import { modalName } from '@consts/modal';

interface Props {
  post: PostType;
  handleToggleEdit: (
    e: React.MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => void;
}

const PostButtonGroup = ({ post, handleToggleEdit }: Props) => {
  const { isLike, handleAddLike, handleDeleteLike } = usePostLike(post);
  const { handleSharePost } = useSharePost(post);
  const { mutate } = useDeletePost(post);
  const { showModal } = useModal(modalName.CONFIRM_REMOVE);
  const { data: user } = useQuery(queryKeys.user, () => loadMyInfo());
  const [isOpenOption, setIsOpenOption] = useState(false);

  const handleToggleOption = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();

    setIsOpenOption(!isOpenOption);
  };

  const handleDeletePost = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    showModal();
  };

  const mutateDeletePost = () => {
    mutate(post.id);
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
      <Link href={`${POST_PAGE}/${post.id}`}>
        <CommentButton>
          <AiOutlineComment size={22} />
          <span>{post.Comments?.length}</span>
        </CommentButton>
      </Link>
      {post.User.id == user?.id && (
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
      <ConfirmModal remove={mutateDeletePost} title="게시글" />
    </ButtonGroup>
  );
};

export default PostButtonGroup;
