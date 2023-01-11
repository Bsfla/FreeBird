import React, { useState } from 'react';
import {
  WriteInfo,
  CommentEditForm,
  CommentReplyForm,
  CommentList,
} from '@components/index';
import { Wrapper, CommentHead, CommentEdit, ReplyWrapper } from './style';
import { CommentType } from '@lib/types';
import useDeleteComment from '@hooks/page/useDeleteComment';

interface Props {
  comment: CommentType;
}

const CommentItem = ({ comment }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { handleDeleteComment } = useDeleteComment(comment.id);
  const {
    content,
    createdAt,
    User: writer,
    Reply: replyComments,
    isReply,
  } = comment;

  const handleToggleEditMode = () => {
    setIsEdit(!isEdit);
  };

  return (
    <Wrapper>
      <CommentHead>
        <WriteInfo nickName={writer.nickname} date={createdAt} />
        <CommentEdit>
          <span onClick={handleToggleEditMode}>수정</span>
          <span onClick={handleDeleteComment}>삭제</span>
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
      <ReplyWrapper>
        {replyComments && <CommentList comments={replyComments} />}
        {!isReply && <CommentReplyForm parentComment={comment} />}
      </ReplyWrapper>
    </Wrapper>
  );
};

export default CommentItem;
