import api from '@apis/base';
import { UserInfoType } from '@lib/types';

export const getProfile = async (userId: number): Promise<UserInfoType> => {
  const response = await api.get({
    url: `/profile/${userId}`,
  });
  return response.data;
};
