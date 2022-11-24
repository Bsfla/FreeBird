import { UserFormType } from '@lib/types';
import api from '@apis/base';

export const signUp = (data: UserFormType) => {
  const { email, nickname, password } = data;
  api.post({
    url: '/user',
    data: {
      email,
      nickname,
      password,
    },
  });
};
