import React from 'react';
import { LoginForm } from '@components/index';
import { AuthLayout } from '@components/common/Layout';
import { NextPageWithLayout } from 'pages/_app';
import { customAxios } from '@apis/base';
import { GetServerSideProps } from 'next';
import { loadMyInfo } from '@apis/user';

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  customAxios.defaults.headers.Cookie = '';

  if (cookie) {
    customAxios.defaults.headers.Cookie = cookie;
    const result: any = await loadMyInfo();

    if (result.response?.status !== 401)
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
  }

  return {
    props: {},
  };
};
