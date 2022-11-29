import React from 'react';
import { Wrraper, PostInfo, PostHead } from './style';
import { ProfileImage } from '@components/common';

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
    </Wrraper>
  );
};

export default PostCard;
