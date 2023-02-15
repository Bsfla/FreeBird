import { UserFormType, LoginFormType, UserInfoType } from '@lib/types';
import api from '@apis/base';

export const signUp = (data: Omit<UserFormType, 'passwordconfirm'>) => {
  return api.post({
    url: '/user',
    data,
  });
};

export const login = (data: LoginFormType) => {
  return api.post({
    url: '/user/login',
    data,
  });
};

export const logout = () => {
  return api.post({
    url: '/user/logout',
  });
};

export const loadMyInfo = (): Promise<UserInfoType> => {
  return api.get({
    url: '/user',
  });
};

export const followUser = (userId: number) => {
  return api.patch({
    url: `/user/${userId}/follow`,
  });
};

export const removeFollowing = (userId: number) => {
  return api.delete({
    url: `/user/${userId}/follow`,
  });
};
