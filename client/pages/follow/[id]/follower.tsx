import React, { ReactElement } from 'react';
import type { NextPageWithLayout } from 'pages/_app';
import { FollowLayout } from '@components/Follow';

const Follower: NextPageWithLayout = () => {
  return <div></div>;
};

Follower.getLayout = function getLayout(page: ReactElement) {
  return <FollowLayout>{page}</FollowLayout>;
};

export default Follower;
