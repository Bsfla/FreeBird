import React from 'react';
import type { NextPage } from 'next';
import AuthLayout from '@components/common/Layout/AuthLayout';
import RegisterForm from '@components/Signup';

const Signup: NextPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Signup;
