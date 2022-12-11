import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { StyledImage } from './style';

interface Props {
  imgPath: string;
  handleRemoveImage: (fileName: string) => void;
}

const Image = ({ imgPath, handleRemoveImage }: Props) => {
  return (
    <StyledImage>
      <AiFillCloseCircle size={26} onClick={() => handleRemoveImage(imgPath)} />
      <img src={`http://localhost:3065/${imgPath}`} alt="이미지" />
    </StyledImage>
  );
};

export default Image;
