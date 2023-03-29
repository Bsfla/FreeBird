import { useMutation, useQueryClient } from 'react-query';
import { sharePost } from '@apis/post';
import { PostType } from '@lib/types';
import { queryKeys } from '@consts/queryKeys';
import { AxiosError } from 'axios';
import { useAlert } from '@hooks/common';
import { ALERT_MESSAGE } from '@consts/alert';

const useSharePost = (post: PostType) => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();
  const { mutate } = useMutation(sharePost, {
    onSuccess: () => {
      showAlert(ALERT_MESSAGE.POST_SHARE);
      queryClient.invalidateQueries(queryKeys.posts);
    },

    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      }
    },
  });

  const handleSharePost = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();

    mutate(post.id);
  };

  return { handleSharePost };
};

export default useSharePost;
