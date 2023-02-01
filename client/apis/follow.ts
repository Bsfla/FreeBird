import { InfiniteFetchingType, FollowUserType } from '@lib/types';
import api from '@apis/base';

export const getFollowers = async (
  body: InfiniteFetchingType
): Promise<FollowUserType[]> => {
  const { lastId, optionId } = body;
  const response = await api.get({
    url: `follow/${optionId}/followers`,
    params: {
      lastId,
    },
  });

  return response.data;
};

export const getFollowings = async (
  body: InfiniteFetchingType
): Promise<FollowUserType[]> => {
  const { lastId, optionId } = body;
  const response = await api.get({
    url: `follow/${optionId}/followings`,
    params: {
      lastId,
    },
  });

  return response.data;
};
