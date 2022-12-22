import React from 'react';
import {
  AiOutlineRetweet,
  AiTwotoneHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from 'react-icons/ai';
import { ButtonGroup, RetwwetButton, LikeButton, CommentButton } from './style';
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

interface Props {
  post: PostType;
}

const PostButtonGroup = ({ post }: Props) => {
  const queryClient = useQueryClient();
  const { data: user } = useQuery<UserInfoType>('user', loadMyInfo);
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

  const handleAddLike = () => {
    addLikeMutate(post.id);
  };

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

  const handleDeleteLike = () => {
    deleteLikeMutate(post.id);
  };

  return (
    <ButtonGroup>
      <RetwwetButton>
        <AiOutlineRetweet size={22} />
        <span>12</span>
      </RetwwetButton>
      <LikeButton>
        {isLike ? (
          <AiTwotoneHeart
            size={22}
            className="like_heart"
            onClick={handleDeleteLike}
          />
        ) : (
          <AiOutlineHeart size={22} onClick={handleAddLike} />
        )}
        <span>{post.Likers.length}</span>
      </LikeButton>

      <CommentButton>
        <AiOutlineComment size={22} />
        <span>10</span>
      </CommentButton>
    </ButtonGroup>
  );
};

export default PostButtonGroup;
