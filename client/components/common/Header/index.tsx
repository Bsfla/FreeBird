import React from 'react';
import { Wrapper, HeaderButton, ButtonGroup } from './style';
import { Logo } from '@components/common';

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <ButtonGroup>
        <HeaderButton>로그인</HeaderButton>
        <HeaderButton>회원가입</HeaderButton>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Header;
