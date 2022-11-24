import api from '@apis/base';

export const signUp = () =>
  api.post({
    url: '/user',
    data: 1,
  });
