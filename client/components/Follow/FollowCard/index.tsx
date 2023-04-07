import React from 'react';
import ProfileImage from '@components/common/ProfileImage';
import { Wrrapper, Button, ProfileButton } from './style';
import { FollowUserType } from '@lib/types';
import { SlUserFollow } from 'react-icons/sl';
import { RiDeleteBin5Line } from 'react-icons/ri';
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
        <ProfileButton>
          <SlUserFollow />
          프로필
        </ProfileButton>
      </Link>
      <Button onClick={handleDeleteFollow(followUser.id)}>
        <RiDeleteBin5Line />
        삭제
      </Button>
    </Wrrapper>
  );
};

export default FollowCard;
