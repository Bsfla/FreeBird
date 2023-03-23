import React from 'react';
import ProfileImage from '@components/common/ProfileImage';
import { Wrrapper, Button, DeleteButton } from './style';
import { FollowUserType } from '@lib/types';
import { PROFILE_PAGE } from '@consts/route';
import Link from 'next/link';

interface Props {
  followUser: FollowUserType;
  handleDeleteFollow: (followId: number) => () => void;
}

const FollowCard = ({ followUser, handleDeleteFollow }: Props) => {
  return (
    <Wrrapper>
      <ProfileImage imgPath={followUser.ProfileImage} />
      <span className="nickname">{followUser.nickname}</span>
      <Link href={`${PROFILE_PAGE}/${followUser.id}`}>
        <Button>프로필 보기</Button>
      </Link>
      <DeleteButton onClick={handleDeleteFollow(followUser.id)}>
        삭제하기
      </DeleteButton>
    </Wrrapper>
  );
};

export default FollowCard;
