import React from 'react';
import {
  AiOutlineRetweet,
  AiTwotoneHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from 'react-icons/ai';
import { ButtonGroup, RetwwetButton, LikeButton, CommentButton } from './style';
import { PostType } from '@lib/types';
import { usePostLike, useSharePost } from '@hooks/index';

interface Props {
  post: PostType;
}

 const PostButtonGroup = ({ post }: Props) => {
  const { isLike, handleAddLike, handleDeleteLike } = usePostLike(post);
  const { handleSharePost } = useSharePost(post);

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
    </ButtonGroup>
  );
};

export default PostButtonGroup;
