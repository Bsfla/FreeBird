import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { createPost } from '@apis/post';
import { Wrraper, TextForm } from './style';
import { Button } from '@components/common';
import { BsCardImage } from 'react-icons/bs';

const PostForm = () => {
  const [text, setText] = useState<string>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePostSubmit = () => {
    createPost({ content: text }).then((res) => console.log(res));
  };

  return (
    <Wrraper>
      <span>게시글 작성하기</span>
      <TextForm onChange={handleTextChange} value={text} />
      <div className="image_upload">
        <BsCardImage size={23} />
      </div>
      <Button name="작성하기" onClick={handlePostSubmit} />
    </Wrraper>
  );
};

export default PostForm;
