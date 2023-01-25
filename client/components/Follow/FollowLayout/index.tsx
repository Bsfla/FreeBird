import { MainLayout } from '@components/common';
import React, { ReactElement } from 'react';
import { Navigation } from './style';

interface Props {
  children: ReactElement;
}

const FollowPageLayout = ({ children }: Props) => {
  return (
    <MainLayout>
      <Navigation>
        <span>랜턴랜턴</span>
      </Navigation>
      {children}
    </MainLayout>
  );
};

export default FollowPageLayout;
