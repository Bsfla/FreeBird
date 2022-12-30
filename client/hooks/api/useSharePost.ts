import { useMutation, useQueryClient } from 'react-query';
import { sharePost } from '@apis/post';
import { PostType } from '@lib/types';
import { queryKeys } from '@consts/queryKeys';
import { AxiosError } from 'axios';

const useSharePost = (post: PostType) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(sharePost, {
    onSuccess: () => {
      alert('게시글 공유에 성공했습니다');
      queryClient.invalidateQueries(queryKeys.posts);
    },

    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      }
    },
  });

  const handleSharePost = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();

    mutate(post.id);
  };

  return { handleSharePost };
};

export default useSharePost;
