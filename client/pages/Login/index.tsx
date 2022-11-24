import React from 'react';
import type { NextPage } from 'next';
import { AuthLayout, LoginForm } from '@components/index';

const Login: NextPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
