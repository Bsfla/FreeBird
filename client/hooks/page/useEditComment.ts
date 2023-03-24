import { editComment } from '@apis/comment';
import { ALERT_MESSAGE } from '@consts/alert';
import { queryKeys } from '@consts/queryKeys';
import { useAlert } from '@hooks/common';
import { useMutation, useQueryClient } from 'react-query';

const useEditComment = () => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();
  const { mutate, isSuccess } = useMutation(editComment, {
    onSuccess() {
      showAlert(ALERT_MESSAGE.COMMENT_EDIT);
      queryClient.invalidateQueries(queryKeys.comment);
    },
  });

  return { mutate, isSuccess };
};

export default useEditComment;
