import { loadMyInfo, logout } from '@apis/user';
import { LOGIN_PAGE } from '@consts/route';
import { useSetUserAtomState } from '@hooks/page';
import { useRouter } from 'next/router';
import React from 'react';
import profile from '@assets/img/profile.png';
import { MainProfile, Image, ProfileWrapper, Button } from './style';
import { useQuery, useQueryClient } from 'react-query';
import { queryKeys } from '@consts/queryKeys';

const UserMenu = () => {
  const router = useRouter();
  const { data: user } = useQuery(queryKeys.user, () => loadMyInfo());
  const queryClient = useQueryClient();

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
      <Image>
        <img src={profile} alt="프로필 이미지" />
      </Image>
      <ProfileWrapper>
        <span className="nickname">{user?.nickname}</span>
        <Button onClick={handleLogout}>로그아웃</Button>
      </ProfileWrapper>
    </MainProfile>
  );
};

export default UserMenu;
