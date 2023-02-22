import React from 'react';
import { MainLayout } from '@components/index';
import { LoadingDot, LoadingDots, Wrapper } from './style';

const Spinner = () => {
  return (
    <MainLayout>
      <Wrapper>
        <LoadingDots>
          <LoadingDot />
          <LoadingDot />
          <LoadingDot />
        </LoadingDots>
      </Wrapper>
    </MainLayout>
  );
};

export default Spinner;
