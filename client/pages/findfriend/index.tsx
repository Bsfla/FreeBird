import { getUnFollowings } from '@apis/follow';
import { MainLayout } from '@components/common/Layout';
import { Header, UserList } from '@components/FindFriend';
import { useInfiniteScroll } from '@hooks/common';
import { FollowUserType } from '@lib/types';
import { NextPageWithLayout } from 'pages/_app';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';

const FindFriend: NextPageWithLayout = () => {
  const { data: userList } = useQuery('unfollowings', () => getUnFollowings());
  return (
    <>
      <Header />
      {userList && <UserList userList={userList} />}
    </>
  );
};

FindFriend.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default FindFriend;
