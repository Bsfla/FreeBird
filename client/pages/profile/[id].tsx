import React, { ReactElement } from 'react';
import { PostIntroBar, ProfileCard, ProfileEditModal } from '@components/index';
import { MainLayout } from '@components/common/Layout';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { queryKeys } from '@consts/queryKeys';
import { customAxios } from '@apis/base';
import { getProfile, getProfilePosts } from '@apis/profile';
import { useRouter } from 'next/router';
import { useInfiniteScroll } from '@hooks/common';
import { PostType } from '@lib/types';
import PostList from '@components/common/PostList';
import NotList from '@components/common/NotList';
import { NextPageWithLayout } from 'pages/_app';

const Profile: NextPageWithLayout = () => {
  const router = useRouter();
  const userId = Number(router.query.id);
  const { data: profile } = useQuery([queryKeys.profile, userId], () =>
    getProfile(userId)
  );

  const { ref: endPost, resultData: posts } = useInfiniteScroll<PostType[]>(
    queryKeys.posts,
    getProfilePosts,
    userId
  );

  return (
    <>
      {profile && <ProfileCard profile={profile} />}
      {profile && <ProfileEditModal profile={profile} />}
      {profile && <PostIntroBar userName={profile.nickname} />}
      {posts?.length ? (
        <PostList posts={posts} endPost={endPost} />
      ) : (
        <NotList />
      )}
    </>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  customAxios.defaults.headers.Cookie = '';

  if (!cookie)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  customAxios.defaults.headers.Cookie = cookie;
  const queryClient = new QueryClient();
  const userId = context.params?.id;

  if (userId && cookie) {
    customAxios.defaults.headers.Cookie = cookie;

    await queryClient.prefetchQuery([queryKeys.profile, userId], () =>
      getProfile(Number(userId))
    );
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Profile;
