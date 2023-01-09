import React from 'react';
import { CommentForm } from '@components/index';
import { Wrraper } from './style';
import { useQuery } from 'react-query';
import { getComments } from '@apis/comment';
import { PostType } from '@lib/types';
import { queryKeys } from '@consts/queryKeys';

interface Props {
  post: PostType;
}

const CommentContainer = ({ post }: Props) => {
  const { data: comments } = useQuery(
    [queryKeys.comment, post.id],
    () => getComments(Number(post.id)),
    {
      staleTime: 1000 * 60 * 60 * 2,
      refetchOnWindowFocus: false,
    }
  );

  console.log(comments);

  return (
    <Wrraper>
      <CommentForm />
    </Wrraper>
  );
};

export default CommentContainer;
