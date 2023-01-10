import React, { useState } from 'react';
import { WriteInfo, CommentEditForm } from '@components/index';
import { Wrapper, CommentHead, CommentEdit } from './style';
import { CommentType } from '@lib/types';

interface Props {
  comment: CommentType;
}

const CommentItem = ({ comment }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { content, createdAt, User: writer } = comment;

  const handleToggleEditMode = () => {
    setIsEdit(!isEdit);
  };

  return (
    <Wrapper>
      <CommentHead>
        <WriteInfo nickName={writer.nickname} date={createdAt} />
        <CommentEdit>
          <span onClick={handleToggleEditMode}>수정</span>
          <span>삭제</span>
        </CommentEdit>
      </CommentHead>
      {isEdit ? (
        <CommentEditForm
          comment={comment}
          handleToggleEditMode={handleToggleEditMode}
        />
      ) : (
        <span>{content}</span>
      )}
    </Wrapper>
  );
};

export default CommentItem;
