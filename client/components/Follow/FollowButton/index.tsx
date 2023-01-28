import { UserInfoType } from '@lib/types';
import React from 'react';
import { Button } from './style';
import { SlUserFollow } from 'react-icons/sl';
import { useMutation } from 'react-query';
import { followUser } from '@apis/user';
import { AxiosError } from 'axios';

interface Props {
  user: Partial<UserInfoType>;
  profile: UserInfoType;
}

const FollowButton = ({ user, profile }: Props) => {
  const { mutate: followMutate } = useMutation(followUser, {
    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      }
    },
  });

  return (
    <>
      <Button onClick={() => followMutate(profile.id)}>
        <SlUserFollow size={15} />
        Follow
      </Button>
    </>
  );
};

export default FollowButton;
