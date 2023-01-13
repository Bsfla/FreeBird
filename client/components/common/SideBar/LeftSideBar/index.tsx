import React from 'react';
import { Logo } from '@components/common';
import {
  Wrraper,
  MainProfile,
  Image,
  ProfileWrapper,
  Button,
  PageMenuList,
  PageMenu,
} from './style';
import profile from '@assets/img/profile.png';
import { ImProfile } from 'react-icons/im';
import { FaUserFriends } from 'react-icons/fa';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { logout } from '@apis/user';
import { useRouter } from 'next/router';
import { LOGIN_PAGE } from '@consts/route';
import { useSetUserAtomState } from '@hooks/page';

const LeftSideBar = () => {
  const router = useRouter();
  const { user } = useSetUserAtomState();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace(LOGIN_PAGE);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrraper>
      <Logo />
      <MainProfile>
        <Image>
          <img src={profile} alt="프로필 이미지" />
        </Image>
        <ProfileWrapper>
          <span className="nickname">{user.nickname}</span>
          <Button onClick={handleLogout}>로그아웃</Button>
        </ProfileWrapper>
      </MainProfile>
      <PageMenuList>
        <PageMenu>
          <ImProfile size={20} />
          <span>프로필 정보</span>
        </PageMenu>
        <PageMenu>
          <FaUserFriends size={20} />
          친구 목록
        </PageMenu>
        <PageMenu>
          <MdPersonAddAlt1 size={20} />
          친구 찾기
        </PageMenu>
      </PageMenuList>
    </Wrraper>
  );
};

export default LeftSideBar;
