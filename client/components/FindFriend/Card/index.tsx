import React from 'react';
import ProfileImage from '@components/common/ProfileImage';
import { SlUserFollow } from 'react-icons/sl';
import { AiOutlinePlus } from 'react-icons/ai';
import { Wrrapper, Button, ProfileButton } from './style';
import { FollowUserType } from '@lib/types';
import { PROFILE_PAGE } from '@consts/route';
import Link from 'next/link';
import { useMutation, useQueryClient } from 'react-query';
import { followUser } from '@apis/user';
import { queryKeys } from '@consts/queryKeys';
import { AxiosError } from 'axios';
import { useAlert } from '@hooks/common';
import { ALERT_MESSAGE } from '@consts/alert';

interface Props {
  user: FollowUserType;
}

const Card = ({ user }: Props) => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();
  const { mutate: followMutate } = useMutation(followUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('unfollowings');
      showAlert(ALERT_MESSAGE.FOLLOWING_SUCCESS);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      }
    },
  });

  const handleFollowUser = () => {
    followMutate(user.id);
  };

  return (
    <Wrrapper>
      <ProfileImage imgPath={user.ProfileImage} />
      <span className="nickname">{user.nickname}</span>
      <Link href={`${PROFILE_PAGE}/${user.id}`}>
        <ProfileButton>
          <SlUserFollow />
          프로필
        </ProfileButton>
      </Link>
      <Button onClick={handleFollowUser}>
        <AiOutlinePlus />
        팔로우
      </Button>
    </Wrrapper>
  );
};

export default Card;
