import { InfiniteFetchingType, FollowUserType } from '@lib/types';
import api from '@apis/base';

export const getFollowers = (
  body: InfiniteFetchingType
): Promise<FollowUserType[]> => {
  const { lastId, paramId } = body;
  return api.get({
    url: `follow/${paramId}/followers`,
    params: {
      lastId,
    },
  });
};

export const getFollowings = (
  body: InfiniteFetchingType
): Promise<FollowUserType[]> => {
  const { lastId, paramId } = body;
  return api.get({
    url: `follow/${paramId}/followings`,
    params: {
      lastId,
    },
  });
};

export const deleteFollowers = (userId: number) => {
  return api.delete({
    url: `follow/${userId}/follower`,
  });
};
