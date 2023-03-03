import React from 'react';
import { Wrapper, HeaderButton, ButtonGroup } from './style';
import Logo from '@components/common/Logo';
import Link from 'next/link';
import { LOGIN_PAGE, SIGNUP_PAGE, MAIN_PAGE } from '@consts/route';

const Header = () => {
  return (
    <Wrapper>
      <Link href={MAIN_PAGE}>
        <Logo />
      </Link>
      <ButtonGroup>
        <Link href={LOGIN_PAGE}>
          <HeaderButton>로그인</HeaderButton>
        </Link>
        <Link href={SIGNUP_PAGE}>
          <HeaderButton>회원가입</HeaderButton>
        </Link>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Header;
