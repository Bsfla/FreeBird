import React from 'react';
import { Wrrapper } from './style';
import { Card } from '@components/FindFriend';
import { FollowUserType } from '@lib/types';

interface Props {
  userList: FollowUserType[];
}

const UserList = ({ userList }: Props) => {
  return (
    <Wrrapper>
      {userList.map((el) => (
        <Card key={el.id} user={el} />
      ))}
    </Wrrapper>
  );
};

export default UserList;
