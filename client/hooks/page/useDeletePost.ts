import { useMutation, useQueryClient } from 'react-query';
import { deletePost } from '@apis/post';
import { PostType } from '@lib/types';
import { useRouter } from 'next/router';
import { useAlert } from '@hooks/common';
import { ALERT_MESSAGE } from '@consts/alert';
import { useModal } from '@hooks/common';
import { modalName } from '@consts/modal';

const useDeletePost = (post?: PostType) => {
  const router = useRouter();
  const { showAlert } = useAlert();
  const { showModal } = useModal(modalName.CONFIRM_REMOVE);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deletePost, {
    onSuccess: () => {
      showAlert(ALERT_MESSAGE.POST_DELETE);
      queryClient.invalidateQueries('posts');
      if (router.query.postId) router.push('/');
    },

    onError: (error) => {
      alert(error);
    },
  });

  const mutateDeletePost = () => {
    if (post) mutate(post.id);
  };

  return { mutateDeletePost, mutate };
};

export default useDeletePost;
