import api from '@apis/base';
import { CommentFormType, CommentType } from '@lib/types';

export const getComments = (postId: number): Promise<CommentType[]> => {
  return api.get({
    url: `/comment/${postId}`,
  });
};

export const createComment = (body: CommentFormType) => {
  const { postId, content } = body;

  return api.post({
    url: `/comment/${postId}`,
    data: { content },
  });
};

export const editComment = (body: CommentFormType) => {
  const { postId: commentId, content } = body;

  return api.patch({
    url: `/comment/${commentId}`,
    data: { content },
  });
};

export const deleteComment = (commentId: number) => {
  return api.delete({
    url: `/comment/${commentId}`,
  });
};

export const replyComment = (body: CommentFormType) => {
  const { postId: commentId, content } = body;

  return api.post({
    url: `/comment/${commentId}/reply`,
    data: { content },
  });
};
