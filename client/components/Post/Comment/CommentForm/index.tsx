import { createComment } from '@apis/comment';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Wrraper, Form, Button } from './style';

const CommentForm = () => {
  const [form, setForm] = useState<string>('');
  const router = useRouter();
  const { id } = router.query;

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm(e.target.value);
  };

  const handleSubmitComment = () => {
    const body = { postId: Number(id), content: form };

    createComment(body);
  };

  return (
    <Wrraper>
      <Form onChange={handleChangeComment} />
      <div className="button_wrapper">
        <Button onClick={handleSubmitComment}>댓글 작성</Button>
      </div>
    </Wrraper>
  );
};

export default CommentForm;
