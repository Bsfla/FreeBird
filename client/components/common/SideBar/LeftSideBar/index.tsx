import React from 'react';
import { Logo } from '@components/common';
import { Wrraper, MainProfile } from './style';

const LeftSideBar = () => {
  return (
    <Wrraper>
      <Logo />
      <MainProfile />
    </Wrraper>
  );
};

export default LeftSideBar;
