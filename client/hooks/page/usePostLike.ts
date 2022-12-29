import { PostType, UserInfoType } from '@lib/types';
import { queryKeys } from '@consts/queryKeys';
import {
  InfiniteData,
  useMutation,
  useQueryClient,
  useQuery,
} from 'react-query';
import { addLike, deleteLike } from '@apis/post';
import { loadMyInfo } from '@apis/user';

const usePostLike = (post: PostType) => {
  const { data: user } = useQuery<UserInfoType>('user', loadMyInfo);
  const queryClient = useQueryClient();
  const isLike = post.Likers.find((found) => found.id === user?.id);

  const { mutate: addLikeMutate } = useMutation(addLike, {
    onMutate() {
      if (!user) return;

      queryClient.setQueryData<InfiniteData<PostType>>(
        queryKeys.posts,
        (data) => {
          const foundPost = data?.pages
            .flat()
            .find((found) => found.id === post.id);

          if (foundPost) {
            foundPost.Likers.push({ id: user.id });
          }

          return {
            pageParams: data?.pageParams || [],
            pages: data?.pages || [],
          };
        }
      );
    },
  });

  const { mutate: deleteLikeMutate } = useMutation(deleteLike, {
    onMutate() {
      if (!user) return;

      queryClient.setQueryData<InfiniteData<PostType>>(
        queryKeys.posts,
        (data) => {
          const posts = data?.pages.flat();
          const foundPost = posts?.find((found) => found.id === post.id);

          if (foundPost) {
            const foundPostIndex = foundPost.Likers.findIndex(
              (found) => found.id === post.id
            );

            foundPost.Likers.splice(foundPostIndex, 1);
          }

          return {
            pageParams: data?.pageParams || [],
            pages: data?.pages || [],
          };
        }
      );
    },
  });

  const handleAddLike = () => {
    addLikeMutate(post.id);
  };

  const handleDeleteLike = () => {
    deleteLikeMutate(post.id);
  };

  return { isLike, handleAddLike, handleDeleteLike };
};

export default usePostLike;
