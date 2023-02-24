import React from 'react';
import NotIcon from '@assets/svg/not.svg';
import { Wrapper } from './style';

const NotList = () => {
  return (
    <Wrapper>
      <NotIcon />
      <span>목록이 존재하지 않습니다</span>
    </Wrapper>
  );
};

export default NotList;
