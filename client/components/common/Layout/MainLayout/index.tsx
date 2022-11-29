import React from 'react';
import { LeftSideBar, RightSideBar } from '@components/common';
import { Wrapper } from './style';

const MainLayout = () => {
  return (
    <Wrapper>
      <LeftSideBar />
      <RightSideBar />
    </Wrapper>
  );
};

export default MainLayout;
