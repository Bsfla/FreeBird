import React from 'react';
import { Wrapper, HeaderButton, ButtonGroup } from './style';
import { Logo } from '@components/common';
import Link from 'next/link';

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <ButtonGroup>
        <Link href="/Login">
          <HeaderButton>로그인</HeaderButton>
        </Link>
        <Link href="/Signup">
          <HeaderButton>회원가입</HeaderButton>
        </Link>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Header;
