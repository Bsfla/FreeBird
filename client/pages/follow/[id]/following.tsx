import React, { ReactElement } from 'react';
import type { NextPageWithLayout } from 'pages/_app';
import { FollowLayout } from '@components/Follow';

const Following: NextPageWithLayout = () => {
  return <div></div>;
};

Following.getLayout = function getLayout(page: ReactElement) {
  return <FollowLayout>{page}</FollowLayout>;
};

export default Following;
