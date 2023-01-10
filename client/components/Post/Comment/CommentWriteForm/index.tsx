import { useCreateComment } from '@hooks/page';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CommentForm from '../CommentForm';

const CommentWriteForm = () => {
  const [form, setForm] = useState<string>('');
  const router = useRouter();
  const { id } = router.query;
  const { mutate } = useCreateComment();

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm(e.target.value);
  };

  const handleSubmitComment = () => {
    if (!form.length) return alert('내용을 입력해주세요');
    const body = { postId: Number(id), content: form };

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
