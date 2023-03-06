import React, { useMemo } from 'react';
import { Wrapper, HeaderButton, ButtonGroup } from './style';
import Logo from '@components/common/Logo';
import Link from 'next/link';
import { LOGIN_PAGE, SIGNUP_PAGE, MAIN_PAGE } from '@consts/route';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const isLocated = useMemo(() => {
    const routeLocation = router.pathname;
    if (routeLocation === LOGIN_PAGE) return true;
    else return false;
  }, [router]);

  return (
    <Wrapper>
      <Link href={MAIN_PAGE}>
        <Logo />
      </Link>
      <ButtonGroup>
        <Link href={LOGIN_PAGE}>
          <HeaderButton isLocated={isLocated}>로그인</HeaderButton>
        </Link>
        <Link href={SIGNUP_PAGE}>
          <HeaderButton isLocated={!isLocated}>회원가입</HeaderButton>
        </Link>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Header;
