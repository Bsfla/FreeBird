import React, { useState, useEffect } from 'react';
import { useEditPost } from '@hooks/page';
import { upLoadImages } from '@apis/post';
import Button from '@components/common/Button';
import WriteForm from '../WriteForm';
import { PostType } from '@lib/types';
import { FormHeader, Wrraper } from './style';

interface Props {
  post: PostType;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggleEdit: (
    e: React.MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => void;
}

const PostEditForm = ({ post, handleToggleEdit, setIsEdit }: Props) => {
  const [text, setText] = useState<string>(post.content);
  const [imgPaths, setImagePaths] = useState<string[]>(
    post.Images.map((image) => image.src)
  );
  const { mutate, isSuccess } = useEditPost();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePostSubmit = () => {
    if (text.length === 0) return alert('글을 작성해주세요');

    const formData = new FormData();

    imgPaths.forEach((imgPath) => formData.append('image', imgPath));
    formData.append('content', text);

    const body = { postId: post.id, data: formData };

    try {
      mutate(body);
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

  useEffect(() => {
    if (isSuccess) setIsEdit(false);
  }, [isSuccess]);

  return (
    <Wrraper>
      <FormHeader>
        <span>게시글 수정하기</span>
        <button onClick={handleToggleEdit}>수정 취소</button>
      </FormHeader>
      <WriteForm
        text={text}
        imgPaths={imgPaths}
        handleImagesChange={handleImagesChange}
        handleTextChange={handleTextChange}
        handleRemoveImage={handleRemoveImage}
      />
      <Button name="수정하기" onClick={handlePostSubmit} />
    </Wrraper>
  );
};

export default PostEditForm;
