import { useMutation, useQueryClient } from 'react-query';
import { deletePost } from '@apis/post';
import { PostType } from '@lib/types';
import { useRouter } from 'next/router';
import { useAlert } from '@hooks/common';
import { ALERT_MESSAGE } from '@consts/alert';

const useDeletePost = (post?: PostType) => {
  const router = useRouter();
  const { showAlert } = useAlert();
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

  const handleDeletePost = (
    e: React.MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();

    if (post) mutate(post.id);
  };

  return { handleDeletePost };
};

export default useDeletePost;
