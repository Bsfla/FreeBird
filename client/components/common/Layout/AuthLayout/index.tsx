import React, { ReactNode } from 'react';
import Header from '@components/common/Header';
import Spinner from '@components/common/Spinner';
import { useRouteLodaing } from '@hooks/index';
import { Wrrper } from './style';

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  const { loading } = useRouteLodaing();

  return (
    <>
      <Header />
      <Wrrper>{loading ? <Spinner /> : children}</Wrrper>
    </>
  );
};

export default AuthLayout;
