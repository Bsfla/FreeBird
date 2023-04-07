import React from 'react';
import AuthLayout from '@components/common/Layout/AuthLayout';
import RegisterForm from '@components/Signup';
import { NextPageWithLayout } from 'pages/_app';
import { GetServerSideProps } from 'next';
import { customAxios } from '@apis/base';
import { loadMyInfo } from '@apis/user';

const Signup: NextPageWithLayout = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Signup;

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
