import { useEditComment } from '@hooks/page';
import React, { useEffect, useState } from 'react';
import { CommentForm } from '@components/index';
import { CommentType } from '@lib/types';

interface Props {
  comment: CommentType;
  handleToggleEditMode: () => void;
}

const CommentEditForm = ({ comment, handleToggleEditMode }: Props) => {
  const [form, setForm] = useState<string>(comment.content);
  const { mutate, isSuccess } = useEditComment();

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        
    setForm(e.target.value);
  };

  const handleSubmitComment = () => {
    if (!form.length) return alert('내용을 입력해주세요');
    const body = { postId: comment.id, content: form };

    mutate(body);
    setForm('');
  };

  useEffect(() => {
    if (isSuccess) handleToggleEditMode();
  }, [isSuccess]);

  return (
    <CommentForm
      form={form}
      handleChangeComment={handleChangeComment}
      handleSubmitComment={handleSubmitComment}
    />
  );
};

export default CommentEditForm;
