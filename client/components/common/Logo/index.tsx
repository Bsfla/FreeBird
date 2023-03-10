import React from 'react';
import { LogoWrapper } from './style';
import LogoIcon from '@assets/svg/birdicon.svg';
import Link from 'next/link';
import { MAIN_PAGE } from '@consts/route';

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoIcon />
      <Link href={MAIN_PAGE}>
        <span>FreeBird</span>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
