import { CommentItem } from '@components/Post';
import { CommentType } from '@lib/types';
import React from 'react';
import { Wrrapper } from './style';

interface Props {
  comments: CommentType[];
}

const CommentList = ({ comments }: Props) => {
  return (
    <Wrrapper>
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </Wrrapper>
  );
};

export default CommentList;
