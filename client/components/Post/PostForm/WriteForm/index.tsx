import React from 'react';
import Image from '../Image';
import { Wrraper, TextForm, ImagesContainer } from './style';
import { BsCardImage } from 'react-icons/bs';

interface Props {
  imgPaths: string[];
  text: string;
  handleImagesChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleRemoveImage: (fileName: string) => void;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const WriteForm = ({
  text,
  imgPaths,
  handleImagesChange,
  handleTextChange,
  handleRemoveImage,
}: Props) => {
  return (
    <Wrraper>
      <TextForm onChange={handleTextChange} value={text} />
      <form encType="multipart/form-data">
        <label className="image_upload">
          <BsCardImage size={23} />
          <input
            type="file"
            name="image"
            accept=".gif, .jpg, .png"
            onChange={handleImagesChange}
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
    </Wrraper>
  );
};

export default WriteForm;
