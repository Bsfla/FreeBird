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

const LeftSideBar = () => {
  return (
    <Wrraper>
      <Logo />
      <MainProfile>
        <Image>
          <img src={profile} alt="프로필 이미지" />
        </Image>
        <ProfileWrapper>
          <span className="nickname">랜턴랜턴 님</span>
          <Button>로그아웃</Button>
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
