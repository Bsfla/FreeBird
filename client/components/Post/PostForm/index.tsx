import React, { useState } from 'react';
import { useCreatePost } from '@hooks/api';
import { upLoadImages } from '@apis/post';
import { Button } from '@components/common';
import Image from './Image';
import { Wrraper, TextForm, ImagesContainer } from './style';
import { BsCardImage } from 'react-icons/bs';

const PostForm = () => {
  const [text, setText] = useState<string>('');
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
      <TextForm onChange={handleTextChange} value={text} />
      <form encType="multipart/form-data">
        <label className="image_upload">
          <BsCardImage size={23} />
          <input
            type="file"
            name="image"
            accept=".gif, .jpg, .png"
            onChange={handleImagesChange}
            multiple
          />
        </label>
      </form>
      <ImagesContainer>
        {imgPaths.map((imgPath) => (
          <Image
            key={imgPath}
            imgPath={imgPath}
            handleRemoveImage={handleRemoveImage}
          />
        ))}
      </ImagesContainer>
      <Button name="작성하기" onClick={handlePostSubmit} />
    </Wrraper>
  );
};

export default PostForm;
