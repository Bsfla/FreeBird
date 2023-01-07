import React from 'react';
import { Wrraper, Form, Button } from './style';

const CommentForm = () => {
  return (
    <Wrraper>
      <Form />
      <div className="button_wrapper">
        <Button>댓글 작성</Button>
      </div>
    </Wrraper>
  );
};

export default CommentForm;
