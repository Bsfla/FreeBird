import React from 'react';
import { CommentList, CommentWriteForm } from '@components/Post';
import { Wrraper } from './style';
import { useQuery } from 'react-query';
import { getComments } from '@apis/comment';
import { CommentType, PostType } from '@lib/types';
import { queryKeys } from '@consts/queryKeys';

interface Props {
  post: PostType;
}

const CommentContainer = ({ post }: Props) => {
  const { data: comments } = useQuery<CommentType[]>(
    [queryKeys.comment, post.id],
    () => getComments(Number(post.id))
  );

  return (
    <Wrraper>
      <span className="comment_count">{`${comments?.length}개의 댓글`}</span>
      <CommentWriteForm />
      {comments && <CommentList comments={comments} />}
    </Wrraper>
  );
};

export default CommentContainer;
