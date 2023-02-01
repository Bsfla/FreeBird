import React from 'react';
import { ProfileImage } from '@components/index';
import { Wrrapper, Button, DeleteButton } from './style';
import { FollowUserType } from '@lib/types';

interface Props {
  followUser: FollowUserType
}

const FollowCard = ({followUser}: Props) => {
  return (
    <Wrrapper>
      <ProfileImage imgPath={followUser.ProfileImage} />
      <span className="nickname">{followUser.nickname}</span>
      <Button>프로필 보기</Button>
      <DeleteButton>삭제하기</DeleteButton>
    </Wrrapper>
  );
};

export default FollowCard;
