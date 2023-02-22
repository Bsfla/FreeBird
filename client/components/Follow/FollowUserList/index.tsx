import { followUser } from '@apis/user';
import { FollowUserType } from '@lib/types';
import React from 'react';
import FollowCard from '../FollowCard';
import { Wrrapper, NotList } from './style';

interface Props {
  followUsers: FollowUserType[];
  handleDeleteFollow: (followId: number) => () => void;
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
      {followUsers.length < 1 && (
        <NotList>
          <span>목록이 없습니다.</span>
        </NotList>
      )}
    </Wrrapper>
  );
};

export default FollowUserList;
