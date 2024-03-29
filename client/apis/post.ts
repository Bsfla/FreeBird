import api from '@apis/base';
import { InfiniteFetchingType, PostEditType, PostType } from '@lib/types';

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

export const getPosts = (body: InfiniteFetchingType): Promise<PostType[]> => {
  const { lastId } = body;
  return api.get({
    url: '/posts',
    params: {
      lastId,
    },
  });
};

export const searchPosts = (
  body: InfiniteFetchingType
): Promise<PostType[]> => {
  const { lastId, paramId } = body;
  return api.get({
    url: `/posts/${paramId}`,
    params: {
      lastId,
    },
  });
};

export const getPost = (postId: number): Promise<PostType> => {
  return api.get({
    url: `/post/${postId}`,
  });
};

export const editPost = (body: PostEditType): Promise<any> => {
  const { postId, data } = body;

  return api.patch({
    url: `/post/${postId}`,
    data,
  });
};

export const deletePost = (postId: number) => {
  return api.delete({
    url: `/post/${postId}`,
  });
};

export const addLike = (postId: number) => {
  return api.patch({
    url: `/post/${postId}/like`,
  });
};

export const deleteLike = (postId: number) => {
  return api.delete({
    url: `/post/${postId}/like`,
  });
};

export const sharePost = (postId: number) => {
  return api.post({
    url: `/post/${postId}/Retweet`,
  });
};
