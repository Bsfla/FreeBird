import React from 'react';
import type { NextPage } from 'next';
import { AuthLayout, RegisterForm } from '@components/index';

const Signup: NextPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Signup;
