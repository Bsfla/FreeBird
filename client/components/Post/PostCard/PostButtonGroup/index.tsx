import React from 'react';
import {
  AiOutlineRetweet,
  AiTwotoneHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from 'react-icons/ai';
import { ButtonGroup, RetwwetButton, LikeButton, CommentButton } from './style';
import { PostType } from '@lib/types';
import { usePostLike } from '@hooks/page';
import { useMutation } from 'react-query';
import { sharePost } from '@apis/post';

interface Props {
  post: PostType;
}

const PostButtonGroup = ({ post }: Props) => {
  const { isLike, handleAddLike, handleDeleteLike } = usePostLike(post);
  const { mutate } = useMutation(sharePost);

  const handleSharePost = () => {
    mutate(post.id);
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
    </ButtonGroup>
  );
};

export default PostButtonGroup;
