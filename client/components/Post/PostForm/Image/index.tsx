import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { StyledImage } from './style';

interface Props {
  imgPath: string;
}

const Image = ({ imgPath }: Props) => {
  return (
    <StyledImage>
      <AiFillCloseCircle size={26} />
      <img src={`http://localhost:3065/${imgPath}`} alt="이미지" />
    </StyledImage>
  );
};

export default Image;
