import React from 'react';
import { LoadingDot, LoadingDots, Wrapper } from './style';

const Spinner = () => {
  return (
    <Wrapper>
      <LoadingDots>
        <LoadingDot />
        <LoadingDot />
        <LoadingDot />
      </LoadingDots>
    </Wrapper>
  );
};

export default Spinner;

