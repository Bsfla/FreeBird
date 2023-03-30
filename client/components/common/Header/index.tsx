import React from 'react';
import { Wrapper } from './style';
import Logo from '@components/common/Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

export default Header;
