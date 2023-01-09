import { useMutation, useQueryClient } from 'react-query';
import { createComment } from '@apis/comment';
import { queryKeys } from '@consts/queryKeys';

const useCreateComment = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(createComment, {
    onSuccess: () => {
      alert('댓글 생성에 성공했습니다');
      queryClient.invalidateQueries(queryKeys.comment);
    },

    onError: (error) => {
      alert(error);
    },
  });

  return { mutate };
};

export default useCreateComment;
