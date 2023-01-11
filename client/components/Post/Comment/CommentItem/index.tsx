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
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

interface Props {
  comment: CommentType;
}

const CommentItem = ({ comment }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isOpenReplyComment, setIsOpenReplyComment] = useState<boolean>(false);
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

  const handleOpenReplyComment = () => {
    setIsOpenReplyComment(!isOpenReplyComment);
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
      {!isReply && (
        <div className="reply_comment" onClick={handleOpenReplyComment}>
          {isOpenReplyComment ? (
            <span>
              <AiOutlineMinusSquare />
              숨기기
            </span>
          ) : (
            <span>
              <AiOutlinePlusSquare />
              {replyComments?.length
                ? `${replyComments.length}개의 답글`
                : '답글 달기'}
            </span>
          )}
        </div>
      )}
      {isOpenReplyComment && (
        <ReplyWrapper>
          {replyComments && <CommentList comments={replyComments} />}
          {!isReply && <CommentReplyForm parentComment={comment} />}
        </ReplyWrapper>
      )}
    </Wrapper>
  );
};

export default CommentItem;
