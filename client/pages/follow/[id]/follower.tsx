import React, { ReactElement } from 'react';
import type { NextPageWithLayout } from 'pages/_app';
import { FollowLayout, FollowCard } from '@components/Follow';

const Follower: NextPageWithLayout = () => {
  return <FollowCard />;
};

Follower.getLayout = function getLayout(page: ReactElement) {
  return <FollowLayout>{page}</FollowLayout>;
};

export default Follower;
