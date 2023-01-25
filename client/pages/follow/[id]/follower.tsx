import React, { ReactElement } from 'react';
import { MainLayout } from '@components/index';
import { useRouter } from 'next/router';
import type { NextPageWithLayout } from 'pages/_app';
import { FollowLayout } from '@components/Follow';

const Follower: NextPageWithLayout = () => {
  const router = useRouter();
  const name = router.pathname.slice(13);

  return <div>팔로우</div>;
};

Follower.getLayout = function getLayout(page: ReactElement) {
  return <FollowLayout>{page}</FollowLayout>;
};

export default Follower;
