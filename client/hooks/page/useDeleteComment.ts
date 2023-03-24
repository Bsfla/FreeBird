import { deleteComment } from '@apis/comment';
import { ALERT_MESSAGE } from '@consts/alert';
import { queryKeys } from '@consts/queryKeys';
import { useAlert } from '@hooks/common';
import { useMutation, useQueryClient } from 'react-query';

const useDeleteComment = (commentId: number) => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();
  const { mutate } = useMutation(deleteComment, {
    onSuccess: () => {
      showAlert(ALERT_MESSAGE.COMMENT_DELETE);
      queryClient.invalidateQueries(queryKeys.comment);
    },

    onError: (error) => {
      alert(error);
    },
  });

  const handleDeleteComment = () => {
    mutate(commentId);
  };

  return { handleDeleteComment };
};

export default useDeleteComment;
