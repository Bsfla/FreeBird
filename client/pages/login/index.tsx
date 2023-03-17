import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { LoginForm } from '@components/index';
import { AuthLayout } from '@components/common/Layout';

const Login: NextPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
