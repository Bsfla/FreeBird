import api from '@apis/base';
import { PostType } from '@lib/types';

export const createPost = (data: FormData) => {
  return api.post({
    url: '/post',
    data,
  });
};

export const upLoadImages = (data: FormData) => {
  return api.post({
    url: '/post/images',
    data,
  });
};

export const getPosts = async (lastId?: number): Promise<PostType[]> => {
  const response = await api.get({
    url: '/posts',
    params: {
      lastId,
    },
  });

  return response.data;
};

export const addLike = async (postId: string) => {
  return api.patch({
    url: `${postId}/like`,
  });
};

export const deleteLike = async (postId: string) => {
  return api.delete({
    url: `${postId}/like`,
  });
};
