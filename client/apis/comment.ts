import api from '@apis/base';
import { CommentFormType, CommentType } from '@lib/types';

export const getComments = async (postId: number): Promise<CommentType[]> => {
  const response = await api.get({
    url: `/comment/${postId}`,
  });

  return response.data;
};

export const createComment = (body: CommentFormType) => {
  const { postId, content } = body;

  return api.post({
    url: `/comment/${postId}`,
    data: { content },
  });
};
