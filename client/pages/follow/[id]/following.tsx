import React, { ReactElement } from 'react';
import type { NextPageWithLayout } from 'pages/_app';
import { FollowLayout, FollowUserList } from '@components/Follow';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { useInfiniteScroll } from '@hooks/common';
import { queryKeys } from '@consts/queryKeys';
import { getFollowings } from '@apis/follow';
import { FollowUserType } from '@lib/types';
import { useRouter } from 'next/router';

const Following: NextPageWithLayout = () => {
  const router = useRouter();
  const userId = Number(router.query.id);

  const { ref, resultData: followers } = useInfiniteScroll<FollowUserType[]>(
    queryKeys.following,
    getFollowings,
    userId
  );

  return (
    <>
      {followers && <FollowUserList followUsers={followers} />}
      <div ref={ref}>d</div>
    </>
  );
};

Following.getLayout = function getLayout(page: ReactElement) {
  return <FollowLayout>{page}</FollowLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const userId = context.params?.id;

  await queryClient.prefetchInfiniteQuery(queryKeys.following, () =>
    getFollowings({ lastId: 0, optionId: Number(userId) })
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Following;
