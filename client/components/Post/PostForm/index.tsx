import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { createPost } from '@apis/post';
import { Wrraper, TextForm, ImagesContainer, Image } from './style';
import { Button } from '@components/common';
import { BsCardImage } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

const PostForm = () => {
  const [text, setText] = useState<string>('');
  const { mutate } = useMutation(createPost);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePostSubmit = () => {
    mutate({ content: text });
  };

  return (
    <Wrraper>
      <span>게시글 작성하기</span>
      <TextForm onChange={handleTextChange} value={text} />
      <div className="image_upload">
        <BsCardImage size={23} />
      </div>
      <ImagesContainer>
        <Image>
          <AiFillCloseCircle size={26} />
          <img
            src="https://pbs.twimg.com/media/FhlwJXyacAIw7IZ?format=png&name=small"
            alt="이미지"
          />
        </Image>
      </ImagesContainer>
      <Button name="작성하기" onClick={handlePostSubmit} />
    </Wrraper>
  );
};

export default PostForm;
