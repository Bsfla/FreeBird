import { followUser } from '@apis/user';
import { FollowUserType } from '@lib/types';
import React from 'react';
import FollowCard from '../FollowCard';
import { Wrrapper } from './style';

interface Props {
  followUsers: FollowUserType[];
  handleDeleteFollow: (followId: number) => void;
}

const FollowUserList = ({ followUsers, handleDeleteFollow }: Props) => {
  return (
    <Wrrapper>
      {followUsers.map((followUser) => (
        <FollowCard
          followUser={followUser}
          key={followUser.id}
          handleDeleteFollow={handleDeleteFollow}
        />
      ))}
    </Wrrapper>
  );
};

export default FollowUserList;