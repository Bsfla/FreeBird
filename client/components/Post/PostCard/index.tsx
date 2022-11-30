import React from 'react';
import {
  Wrraper,
  PostInfo,
  PostHead,
  PostContent,
  PostButtonGroup,
  RetwwetButton,
  LikeButton,
  CommentButton,
} from './style';
import { ProfileImage } from '@components/common';
import {
  AiOutlineRetweet,
  AiTwotoneHeart,
  AiOutlineComment,
} from 'react-icons/ai';

const PostCard = () => {
  return (
    <Wrraper>
      <PostHead>
        <ProfileImage />
        <PostInfo>
          <span className="user_name">찬규</span>
          <span className="date">2022년 11월 29일</span>
        </PostInfo>
      </PostHead>
      <PostContent>
        <span>오늘 새로운 포켓몬을 잡았다 너무 좋았다</span>
      </PostContent>
      <PostButtonGroup>
        <RetwwetButton>
          <AiOutlineRetweet size={22} />
          <span>12</span>
        </RetwwetButton>
        <LikeButton>
          <AiTwotoneHeart size={22} />
          <span>12</span>
        </LikeButton>
        <CommentButton>
          <AiOutlineComment size={22} />
          <span>12</span>
        </CommentButton>
      </PostButtonGroup>
    </Wrraper>
  );
};

export default PostCard;
