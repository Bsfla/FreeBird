import api from '@apis/base';
import { UserInfoType, UserProfileEditType } from '@lib/types';

export const getProfile = async (userId: number): Promise<UserInfoType> => {
  const response = await api.get({
    url: `/profile/${userId}`,
  });
  return response.data;
};

export const editProfile = (body: UserProfileEditType) => {
  const { formData, userId } = body;

  return api.patch({
    url: `/profile/${userId}`,
    data: formData,
  });
};
