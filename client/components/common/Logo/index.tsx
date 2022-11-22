import React from 'react';
import { LogoWrapper } from './style';
import LogoIcon from '@assets/svg/LogoIcon.svg';

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoIcon />
      <span>PokeBird</span>
    </LogoWrapper>
  );
};

export default Logo;
