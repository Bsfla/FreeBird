import React, { useState } from 'react';
import { useCreatePost } from '@hooks/api';
import { upLoadImages } from '@apis/post';
import Button from '@components/common/Button';
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
    if (imgPaths.length === 3) {
      alert('이미지는 3장까지 추가 가능합니다');
      return;
    }
    const imageFormData = new FormData();

    const files = e.currentTarget.files || [];

    if (files[0].size > 5 * 1024 * 1024) {
      alert('5MB이상 업로드 할 수 없습니다');
      return;
    }

    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });

    try {
      const images = await upLoadImages(imageFormData);
      setImagePaths((prev) => [...prev, images]);
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
