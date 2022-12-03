import React from 'react';
import { LeftSideBar, RightSideBar } from '@components/common';
import { PostCard, PostForm } from '@components/Post';
import { Wrapper, MainContents, IntroBar } from './style';

const MainLayout = () => {
  return (
    <Wrapper>
      <LeftSideBar />
      <MainContents>
        <IntroBar>
          <span>당신의 포켓몬 소식들을 공유해주세요</span>
        </IntroBar>
        <PostForm />
        <PostCard />
      </MainContents>
      <RightSideBar />
    </Wrapper>
  );
};

export default MainLayout;
