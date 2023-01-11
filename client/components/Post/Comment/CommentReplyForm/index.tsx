import useReplyComment from '@hooks/page/useReplyComment';
import { CommentType } from '@lib/types';
import React, { useState } from 'react';
import CommentForm from '../CommentForm';

interface Props {
  parentComment: CommentType;
}

const CommentWriteForm = ({ parentComment }: Props) => {
  const [form, setForm] = useState<string>('');
  const { mutate } = useReplyComment();

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm(e.target.value);
  };

  const handleSubmitComment = () => {
    const body = { postId: parentComment.id, content: form };

    mutate(body);
    setForm('');
  };

  return (
    <CommentForm
      form={form}
      handleChangeComment={handleChangeComment}
      handleSubmitComment={handleSubmitComment}
    />
  );
};

export default CommentWriteForm;
