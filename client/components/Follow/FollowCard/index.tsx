import React from 'react';
import { ProfileImage } from '@components/index';
import { Wrrapper, Button, DeleteButton } from './style';

const FollowCard = () => {
  return (
    <Wrrapper>
      <ProfileImage imgPath={null} />
      <span className="nickname">랜턴랜턴</span>
      <Button>프로필 보기</Button>
      <DeleteButton>삭제하기</DeleteButton>
    </Wrrapper>
  );
};

export default FollowCard;
