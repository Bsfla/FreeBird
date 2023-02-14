import { InfiniteFetchingType, FollowUserType } from '@lib/types';
import api from '@apis/base';

export const getFollowers = async (
  body: InfiniteFetchingType
): Promise<FollowUserType[]> => {
  const { lastId, paramId } = body;
  const response = await api.get({
    url: `follow/${paramId}/followers`,
    params: {
      lastId,
    },
  });

  return response.data;
};

export const getFollowings = async (
  body: InfiniteFetchingType
): Promise<FollowUserType[]> => {
  const { lastId, paramId } = body;
  const response = await api.get({
    url: `follow/${paramId}/followings`,
    params: {
      lastId,
    },
  });

  return response.data;
};

export const deleteFollowers = async (userId: number) => {
  return api.delete({
    url: `follow/${userId}/follower`,
  });
};
