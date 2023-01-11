import { useMutation, useQueryClient } from 'react-query';
import { replyComment } from '@apis/comment';
import { queryKeys } from '@consts/queryKeys';

const useReplyComment = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(replyComment, {
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

export default useReplyComment;
