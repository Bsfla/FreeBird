import { editComment } from '@apis/comment';
import { queryKeys } from '@consts/queryKeys';
import { useMutation, useQueryClient } from 'react-query';

const useEditComment = () => {
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useMutation(editComment, {
    onSuccess() {
      queryClient.invalidateQueries(queryKeys.comment);
    },
  });

  return { mutate, isSuccess };
};

export default useEditComment;
