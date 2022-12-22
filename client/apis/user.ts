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

export const loadMyInfo = async (): Promise<UserInfoType> => {
  const response = await api.get({
    url: '/user',
  });

  return response.data;
};
