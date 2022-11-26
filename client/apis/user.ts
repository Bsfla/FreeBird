import { UserFormType } from '@lib/types';
import api from '@apis/base';

export const signUp = (data: Omit<UserFormType, 'passwordconfirm'>) => {
  return api.post({
    url: '/user',
    data,
  });
};
