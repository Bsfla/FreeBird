import React, { ReactElement } from 'react';
import type { NextPageWithLayout } from 'pages/_app';
import { FollowLayout, FollowUserList } from '@components/Follow';
import { GetServerSideProps } from 'next';
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQueryClient,
} from 'react-query';
import { useInfiniteScroll } from '@hooks/common';
import { queryKeys } from '@consts/queryKeys';
import { deleteFollowers, getFollowers } from '@apis/follow';
import { FollowUserType } from '@lib/types';
import { useRouter } from 'next/router';

const Follower: NextPageWithLayout = () => {
  const router = useRouter();
  const userId = Number(router.query.id);
  const queryClient = useQueryClient();

  const { ref, resultData: followers } = useInfiniteScroll<FollowUserType[]>(
    queryKeys.follower,
    getFollowers,
    userId
  );

  const { mutate } = useMutation(deleteFollowers, {
    onSuccess: () => {
      alert('팔로워를 삭제했습니다');
      queryClient.invalidateQueries(queryKeys.follower);
    },

    onError: (error) => {
      alert(error);
    },
  });

  const handleDeleteFollower = (followId: number) => () => {
    mutate(followId);
  };

  return (
    <>
      {followers?.length ? (
        <FollowUserList
          followUsers={followers}
          handleDeleteFollow={handleDeleteFollower}
        />
      ) : (
        <span>팔로워가 없습니다</span>
      )}
      <div ref={ref}>d</div>
    </>
  );
};

Follower.getLayout = function getLayout(page: ReactElement) {
  return <FollowLayout>{page}</FollowLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const userId = context.params?.id;

  await queryClient.prefetchInfiniteQuery(queryKeys.follower, () =>
    getFollowers({ lastId: 0, paramId: Number(userId) })
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Follower;
