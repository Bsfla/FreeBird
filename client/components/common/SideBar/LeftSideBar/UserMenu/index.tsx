import { loadMyInfo, logout } from '@apis/user';
import React from 'react';
import profile from '@assets/img/profile.png';
import ProfileImage from '@components/common/ProfileImage';
import { MainProfile, ProfileWrapper, Button } from './style';
import { useQuery } from 'react-query';
import { queryKeys } from '@consts/queryKeys';
import { useRouter } from 'next/router';
import { LOGIN_PAGE } from '@consts/route';

const UserMenu = () => {
  const { data: user } = useQuery(queryKeys.user, () => loadMyInfo());
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push(LOGIN_PAGE);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainProfile>
      {user && <ProfileImage imgPath={user?.ProfileImage} size={'Large'} />}
      <ProfileWrapper>
        <span className="nickname">{user?.nickname}</span>
        <Button onClick={handleLogout}>로그아웃</Button>
      </ProfileWrapper>
    </MainProfile>
  );
};

export default UserMenu;
