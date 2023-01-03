import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { editPost } from '@apis/post';

const useEditPost = () => {
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useMutation(editPost, {
    onSuccess: () => {
      alert('게시글 수정에 성공했습니다');
      queryClient.invalidateQueries('posts');
      queryClient.invalidateQueries('post');
    },

    onError: (error) => {
      alert(error);
    },
  });

  return { mutate, isSuccess };
};

export default useEditPost;
