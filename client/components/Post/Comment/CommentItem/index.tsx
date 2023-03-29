import React, { useState } from 'react';
import {
  WriteInfo,
  CommentEditForm,
  CommentReplyForm,
  CommentList,
} from '@components/Post';
import { Wrapper, CommentHead, CommentEdit, ReplyWrapper } from './style';
import { CommentType } from '@lib/types';
import useDeleteComment from '@hooks/page/useDeleteComment';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { queryKeys } from '@consts/queryKeys';
import { loadMyInfo } from '@apis/user';
import { useQuery } from 'react-query';
import { modalName } from '@consts/modal';
import { useModal } from '@hooks/common';
import ConfirmModal from '@components/common/ConfirmModal';

interface Props {
  comment: CommentType;
}

const CommentItem = ({ comment }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isOpenReplyComment, setIsOpenReplyComment] = useState<boolean>(false);
  const { showModal } = useModal(modalName.CONFIRM_REMOVE);
  const { handleDeleteComment } = useDeleteComment(comment.id);
  const {
    content,
    createdAt,
    User: writer,
    Reply: replyComments,
    isReply,
  } = comment;
  const { data: user } = useQuery(queryKeys.user, () => loadMyInfo());

  const handleToggleEditMode = () => {
    setIsEdit(!isEdit);
  };

  const handleOpenReplyComment = () => {
    setIsOpenReplyComment(!isOpenReplyComment);
  };

  const handleConfirmRemove = () => {
    showModal();
  };

  return (
    <Wrapper>
      <CommentHead>
        <WriteInfo
          nickName={writer.nickname}
          date={createdAt}
          imgPath={writer.ProfileImage}
          writerId={writer.id}
        />
        {writer.id === user?.id && (
          <CommentEdit>
            <span onClick={handleToggleEditMode}>수정</span>
            <span onClick={handleConfirmRemove}>삭제</span>
          </CommentEdit>
        )}
      </CommentHead>
      {isEdit ? (
        <CommentEditForm
          comment={comment}
          handleToggleEditMode={handleToggleEditMode}
        />
      ) : (
        <span className="comment_content">{content}</span>
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
      <ConfirmModal remove={handleDeleteComment} title="댓글" />
    </Wrapper>
  );
};

export default CommentItem;
