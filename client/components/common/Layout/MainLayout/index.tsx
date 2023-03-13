import React, { ReactNode } from 'react';
import { LeftSideBar, RightSideBar } from '@components/common/SideBar';
import Spinner from '@components/common/Spinner';
import { useRouteLodaing } from '@hooks/index';
import { Wrapper, MainContents, LoadingContainer } from './style';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { loading } = useRouteLodaing();
  return (
    <Wrapper>
      <LeftSideBar />
      <MainContents>
        {loading ? (
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        ) : (
          children
        )}
      </MainContents>
      <RightSideBar />
    </Wrapper>
  );
};

export default MainLayout;
