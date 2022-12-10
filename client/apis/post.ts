import api from '@apis/base';
import { PostFormType } from '@lib/types';

export const createPost = (data: PostFormType) => {
  return api.post({
    url: '/post',
    data,
  });
};
