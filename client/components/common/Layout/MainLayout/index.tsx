import React, { ReactNode } from 'react';
import { LeftSideBar, RightSideBar } from '@components/common';
import { Wrapper, MainContents } from './style';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <LeftSideBar />
      <MainContents>{children}</MainContents>
      <RightSideBar />
    </Wrapper>
  );
};

export default MainLayout;
