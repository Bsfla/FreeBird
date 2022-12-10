import React from 'react';
import { MainLayout } from '@components/common';
import { PostForm, PostCard } from '@components/Post';
import type { GetServerSideProps, NextPage } from 'next';
import { loadMyInfo } from '@apis/user';
import axios from 'axios';

const Main: NextPage = () => {
  return (
    <MainLayout>
      <PostForm />
      <PostCard />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  } else {
    return { redirect: { destination: '/Login', permanent: false } };
  }

  return {
    props: {
      user: {},
    },
  };
};

export default Main;
