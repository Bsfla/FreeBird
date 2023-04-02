import React from 'react';
import AuthLayout from '@components/common/Layout/AuthLayout';
import RegisterForm from '@components/Signup';
import { NextPageWithLayout } from 'pages/_app';

const Signup: NextPageWithLayout = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Signup;
