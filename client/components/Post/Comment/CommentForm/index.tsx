import React from 'react';
import { Wrraper, Form, Button } from './style';

interface Props {
  form: string;
  handleChangeComment: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmitComment: () => void;
}

const CommentForm = ({
  handleChangeComment,
  handleSubmitComment,
  form,
}: Props) => {
  return (
    <Wrraper>
      <Form
        onChange={handleChangeComment}
        value={form}
        placeholder="댓글을 작성하세요"
      />
      <div className="button_wrapper">
        <Button onClick={handleSubmitComment}>댓글 작성</Button>
      </div>
    </Wrraper>
  );
};

export default CommentForm;
