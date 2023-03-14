import React, { useState } from 'react';
import { MAIN_PAGE } from '@consts/route';
import LogoIcon from '@assets/svg/birdicon.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { Wrapper, Logo } from './style';
import theme from 'styles/theme';

const MobileHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };

  return (
    <Wrapper>
      <Logo>
        <LogoIcon />
        <Link href={MAIN_PAGE}>
          <span>FreeBird</span>
        </Link>
      </Logo>
      <GiHamburgerMenu
        size={20}
        color={theme.colors.white}
        onClick={handleOpenMenu}
      />
    </Wrapper>
  );
};

export default MobileHeader;
