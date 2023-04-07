import { customAxios } from '@apis/base';
import { getUnFollowings } from '@apis/follow';
import { loadMyInfo } from '@apis/user';
import { MainLayout } from '@components/common/Layout';
import { Header, UserList } from '@components/FindFriend';
import { useInfiniteScroll } from '@hooks/common';
import { FollowUserType } from '@lib/types';
import { GetServerSideProps } from 'next';
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  customAxios.defaults.headers.Cookie = '';

  if (!cookie)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  customAxios.defaults.headers.Cookie = cookie;
  const result: any = await loadMyInfo();

  if (result.response?.status === 401)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  return {
    props: {},
  };
};
