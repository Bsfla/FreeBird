import React from 'react';
import { Wrraper, TextForm } from './style';
import { Button } from '@components/common';
import { BsCardImage } from 'react-icons/bs';

const PostForm = () => {
  return (
    <Wrraper>
      <span>게시글 작성하기</span>
      <TextForm />
      <div className="image_upload">
        <BsCardImage size={23} />
      </div>
      <Button name="작성하기" />
    </Wrraper>
  );
};

export default PostForm;
