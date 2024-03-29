import React, { ReactElement } from 'react';
import type { NextPageWithLayout } from 'pages/_app';
import { FollowLayout, FollowUserList } from '@components/Follow';
import { GetServerSideProps } from 'next';
import {
  dehydrate,
  QueryClient,
  useQueryClient,
  useMutation,
} from 'react-query';
import { useAlert, useInfiniteScroll } from '@hooks/common';
import { queryKeys } from '@consts/queryKeys';
import { getFollowings } from '@apis/follow';
import { FollowUserType } from '@lib/types';
import { useRouter } from 'next/router';
import { loadMyInfo, removeFollowing } from '@apis/user';
import { customAxios } from '@apis/base';
import { ALERT_MESSAGE } from '@consts/alert';

const Following: NextPageWithLayout = () => {
  const router = useRouter();
  const userId = Number(router.query.id);
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();

  const { ref: endUserList, resultData: followers } = useInfiniteScroll<
    FollowUserType[]
  >(queryKeys.following, getFollowings, userId);

  const { mutate } = useMutation(removeFollowing, {
    onSuccess: () => {
      showAlert(ALERT_MESSAGE.FOLLOWING_DELETE);
      queryClient.invalidateQueries(queryKeys.following);
    },

    onError: (error) => {
      alert(error);
    },
  });

  const handleDelteFollowing = (followId: number) => () => {
    mutate(followId);
  };

  return (
    <>
      {followers && (
        <FollowUserList
          followUsers={followers}
          handleDeleteFollow={handleDelteFollowing}
          endUserList={endUserList}
        />
      )}
    </>
  );
};

Following.getLayout = function getLayout(page: ReactElement) {
  return <FollowLayout>{page}</FollowLayout>;
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
  const result: any = await loadMyInfo();

  if (result.response?.status === 401)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  const queryClient = new QueryClient();
  const userId = context.params?.id;

  await queryClient.prefetchInfiniteQuery(queryKeys.following, () =>
    getFollowings({ lastId: 0, paramId: Number(userId) })
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Following;
