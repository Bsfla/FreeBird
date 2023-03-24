import { useMutation, useQueryClient } from 'react-query';
import { createPost } from '@apis/post';
import { useAlert } from '@hooks/common';
import { ALERT_MESSAGE } from '@consts/alert';

const useCreatePost = () => {
  const { showAlert } = useAlert();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(createPost, {
    onSuccess: () => {
      showAlert(ALERT_MESSAGE.POST_CREATE);
      queryClient.invalidateQueries('posts');
    },

    onError: (error) => {
      alert(error);
    },
  });

  return { mutate };
};

export default useCreatePost;
