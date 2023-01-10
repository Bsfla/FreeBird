import { useMutation, useQueryClient } from 'react-query';
import { deletePost } from '@apis/post';
import { PostType } from '@lib/types';
import { useRouter } from 'next/router';

const useDeletePost = (post?: PostType) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deletePost, {
    onSuccess: () => {
      alert('게시글을 삭제했습니다 ');
      queryClient.invalidateQueries('posts');
      router.push('/');
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
