import React, { useState } from 'react';
import { useCreatePost } from '@hooks/api';
import { upLoadImages } from '@apis/post';
import { Button } from '@components/common';
import WriteForm from './WriteForm';
import { Wrraper } from './style';

const PostForm = () => {
  const [text, setText] = useState('');
  const [imgPaths, setImagePaths] = useState<string[]>([]);
  const { mutate } = useCreatePost();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePostSubmit = () => {
    if (text.length === 0) return alert('글을 작성해주세요');

    const formData = new FormData();

    imgPaths.forEach((imgPath) => formData.append('image', imgPath));
    formData.append('content', text);

    try {
      mutate(formData);
      setText('');
      setImagePaths([]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImagesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFormData = new FormData();

    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });

    try {
      const { data } = await upLoadImages(imageFormData);
      setImagePaths((prev) => [...prev, ...data]);
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleRemoveImage = (fileName: string) => {
    setImagePaths(imgPaths.filter((imgPath) => fileName !== imgPath));
  };

  return (
    <Wrraper>
      <span>게시글 작성하기</span>
      <WriteForm
        text={text}
        imgPaths={imgPaths}
        handleImagesChange={handleImagesChange}
        handleTextChange={handleTextChange}
        handleRemoveImage={handleRemoveImage}
      />
      <Button name="작성하기" onClick={handlePostSubmit} />
    </Wrraper>
  );
};

export default PostForm;
