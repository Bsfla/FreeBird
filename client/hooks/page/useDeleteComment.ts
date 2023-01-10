import { deleteComment } from '@apis/comment';
import { queryKeys } from '@consts/queryKeys';
import { useMutation, useQueryClient } from 'react-query';

const useDeleteComment = (commentId: number) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteComment, {
    onSuccess: () => {
      alert('댓글을 삭제했습니다 ');
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
