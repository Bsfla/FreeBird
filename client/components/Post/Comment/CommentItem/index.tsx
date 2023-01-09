import React from 'react';
import { WriteInfo } from '@components/index';
import { Wrapper } from './style';
import { CommentType } from '@lib/types';

interface Props {
  comment: CommentType;
}

const CommentItem = ({ comment }: Props) => {
  const { content, createdAt, User: writer } = comment;
  return (
    <Wrapper>
      <WriteInfo nickName={writer.nickname} date={createdAt} />
      <span>{content}</span>
    </Wrapper>
  );
};

export default CommentItem;
