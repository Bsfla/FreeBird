import React from 'react';
import { LoginForm } from '@components/index';
import { AuthLayout } from '@components/common/Layout';
import { NextPageWithLayout } from 'pages/_app';

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
