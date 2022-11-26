import { UserFormType, LoginFormType } from '@lib/types';
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
