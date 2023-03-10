import { loadMyInfo, logout } from '@apis/user';
import React from 'react';
import profile from '@assets/img/profile.png';
import ProfileImage from '@components/common/ProfileImage';
import { MainProfile, ProfileWrapper, Button } from './style';
import { useQuery } from 'react-query';
import { queryKeys } from '@consts/queryKeys';

const UserMenu = () => {
  const { data: user } = useQuery(queryKeys.user, () => loadMyInfo());

  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
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
