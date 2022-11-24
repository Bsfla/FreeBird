import { UserFormType } from '@lib/types';
import api from '@apis/base';

export const signUp = (data: UserFormType) =>
  api.post({
    url: '/user',
    data,
  });
