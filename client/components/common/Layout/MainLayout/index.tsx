import React, { useEffect } from 'react';
import { LeftSideBar, RightSideBar } from '@components/common';
import { PostCard, PostForm } from '@components/Post';
import { Wrapper, MainContents, IntroBar } from './style';
import { loadMyInfo } from '@apis/user';

const MainLayout = () => {
  useEffect(() => {
    loadMyInfo().then((res) => console.log(res));
  }, []);

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
