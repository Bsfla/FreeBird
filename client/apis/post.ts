import api from '@apis/base';

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

export const getPosts = async (lastId?: number) => {
  const response = await api.get({
    url: '/posts',
    params: {
      lastId,
    },
  });

  return response.data;
};
