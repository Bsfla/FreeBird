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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';

  return {
    props: {},
  };
};

export default Login;
