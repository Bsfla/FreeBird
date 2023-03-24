import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { editPost } from '@apis/post';
import { useAlert } from '@hooks/common';
import { ALERT_MESSAGE } from '@consts/alert';

const useEditPost = () => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();
  const { mutate, isSuccess } = useMutation(editPost, {
    onSuccess: () => {
      showAlert(ALERT_MESSAGE.POST_EDIT);
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
