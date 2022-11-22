import React, { ReactNode } from 'react';
import { Header } from '@components/common';
import { Wrrper } from './style';

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Wrrper>{children}</Wrrper>
    </>
  );
};

export default AuthLayout;
