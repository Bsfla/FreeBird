import { UserInfoType } from '@lib/types';
import React, { useMemo } from 'react';
import { Button } from './style';
import { SlUserFollow, SlUserFollowing } from 'react-icons/sl';
import { useMutation, useQueryClient } from 'react-query';
import { followUser, removeFollowing } from '@apis/user';
import { AxiosError } from 'axios';
import { queryKeys } from '@consts/queryKeys';

interface Props {
  user?: UserInfoType;
  profile: UserInfoType;
}

const FollowButton = ({ user, profile }: Props) => {
  const queryClient = useQueryClient();
  const { mutate: followMutate } = useMutation(followUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.profile);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      }
    },
  });

  const { mutate: removeFollowMutate } = useMutation(removeFollowing, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.profile);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      }
    },
  });

  const handleFollowUser = () => {
    followMutate(profile.id);
  };

  const handleRemoveFollowing = () => {
    const confirmRemoveFollowing = confirm('팔로잉을 끊으시겠습니까?');

    if (!confirmRemoveFollowing) return;

    return removeFollowMutate(profile.id);
  };

  const { Followers: followers } = profile;

  const isFollowing = useMemo(() => {
    const findFollower = followers.find((follower) => follower.id === user?.id);

    if (findFollower) return true;
    else return false;
  }, [followers]);

  return (
    <>
      {!isFollowing ? (
        <Button isFollowing={isFollowing} onClick={handleFollowUser}>
          <SlUserFollow size={15} />
          Follow
        </Button>
      ) : (
        <Button isFollowing={isFollowing} onClick={handleRemoveFollowing}>
          <SlUserFollowing size={15} />
          Following
        </Button>
      )}
    </>
  );
};

export default FollowButton;
