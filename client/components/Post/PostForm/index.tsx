import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { createPost, upLoadImages } from '@apis/post';
import Image from './Image';
import { Wrraper, TextForm, ImagesContainer } from './style';
import { Button } from '@components/common';
import { BsCardImage } from 'react-icons/bs';

const PostForm = () => {
  const [text, setText] = useState<string>('');
  const [imgPaths, setImagePaths] = useState<string[]>([]);
  const { mutate } = useMutation(createPost);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePostSubmit = () => {
    mutate({ content: text });
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
          <Image key={imgPath} imgPath={imgPath} />
        ))}
      </ImagesContainer>
      <Button name="작성하기" onClick={handlePostSubmit} />
    </Wrraper>
  );
};

export default PostForm;
