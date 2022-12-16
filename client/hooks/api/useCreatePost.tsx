import { useMutation, useQueryClient } from 'react-query';
import { createPost } from '@apis/post';

const useCreatePost = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(createPost, {
    onSuccess: () => {
      alert('게시글 생성에 성공했습니다');
      queryClient.invalidateQueries('posts');
    },

    onError: (error) => {
      alert(error);
    },
  });

  return { mutate };
};

export default useCreatePost;
