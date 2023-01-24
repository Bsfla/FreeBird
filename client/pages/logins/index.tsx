import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { AuthLayout, LoginForm } from '@components/index';

const Login: NextPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  console.log(cookie);

  return {
    props: {},
  };
};

export default Login;
