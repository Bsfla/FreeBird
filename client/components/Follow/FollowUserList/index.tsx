import { FollowUserType } from '@lib/types';
import React from 'react';
import FollowCard from '../FollowCard';
import NotList from '@components/common/NotList';
import { Wrrapper, EndUserList } from './style';

interface Props {
  followUsers: FollowUserType[];
  endUserList: (node?: Element | null | undefined) => void;
  handleDeleteFollow: (followId: number) => () => void;
}

const FollowUserList = ({
  followUsers,
  handleDeleteFollow,
  endUserList,
}: Props) => {
  console.log(followUsers);
  return (
    <Wrrapper>
      {followUsers.map((followUser) => (
        <FollowCard
          followUser={followUser}
          key={followUser.id}
          handleDeleteFollow={handleDeleteFollow}
        />
      ))}
      {followUsers.length < 1 && <NotList />}
      <EndUserList ref={endUserList} />
    </Wrrapper>
  );
};

export default FollowUserList;
