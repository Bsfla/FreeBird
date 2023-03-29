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
import { useAlert, useInfiniteScroll, useModal } from '@hooks/common';
import { queryKeys } from '@consts/queryKeys';
import { deleteFollowers, getFollowers } from '@apis/follow';
import { FollowUserType } from '@lib/types';
import { useRouter } from 'next/router';
import { customAxios } from '@apis/base';
import { ALERT_MESSAGE } from '@consts/alert';
import { modalName } from '@consts/modal';
import ConfirmModal from '@components/common/ConfirmModal';

const Follower: NextPageWithLayout = () => {
  const router = useRouter();
  const userId = Number(router.query.id);
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();
  const { showModal } = useModal(modalName.CONFIRM_REMOVE);

  const { ref: endUserList, resultData: followers } = useInfiniteScroll<
    FollowUserType[]
  >(queryKeys.follower, getFollowers, userId);

  const { mutate } = useMutation(deleteFollowers, {
    onSuccess: () => {
      showAlert(ALERT_MESSAGE.FOLLOWER_DELETE);
      queryClient.invalidateQueries(queryKeys.follower);
    },

    onError: (error) => {
      alert(error);
    },
  });

  const handleDeleteFollower = (id: number) => () => {
    mutate(id);
  };

  return (
    <>
      {followers && (
        <FollowUserList
          followUsers={followers}
          handleDeleteFollow={handleDeleteFollower}
          endUserList={endUserList}
        />
      )}
    </>
  );
};

Follower.getLayout = function getLayout(page: ReactElement) {
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
function showAlert(ALERT_MESSAGE: {
  readonly POST_EDIT: '게시글이 수정되었습니다.';
  readonly POST_DELETE: '게시글을 삭제했습니다.';
  readonly POST_CREATE: '게시글을 생성했습니다.';
  readonly COMMENT_CREATE: '댓글을 생성했습니다';
  readonly COMMENT_DELETE: '댓글을 삭제했습니다.';
  readonly COMMENT_EDIT: '댓글을 수정했습니다';
  readonly FOLLOWING_SUCCESS: '팔로잉 했습니다.';
  readonly FOLLOWING_DELETE: '팔로잉을 삭제했습니다';
  readonly FOLLOWER_DELETE: '팔로워를 삭제했습니다';
}) {
  throw new Error('Function not implemented.');
}
