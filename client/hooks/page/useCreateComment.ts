import { useMutation, useQueryClient } from 'react-query';
import { createComment } from '@apis/comment';
import { queryKeys } from '@consts/queryKeys';
import { useAlert } from '@hooks/common';
import { ALERT_MESSAGE } from '@consts/alert';

const useCreateComment = () => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();
  const { mutate } = useMutation(createComment, {
    onSuccess: () => {
      showAlert(ALERT_MESSAGE.COMMENT_CREATE);
      queryClient.invalidateQueries(queryKeys.comment);
    },

    onError: (error) => {
      alert(error);
    },
  });

  return { mutate };
};

export default useCreateComment;
