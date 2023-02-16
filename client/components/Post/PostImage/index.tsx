import React, { useState } from 'react';
import { ImageWrapper, ImageSection } from './style';
import { createImagePath } from '@lib/utils';
import { useRecoilState } from 'recoil';
import { modalAtomState } from '@recoil/modal';
import PostImageCarousel from '../PostImageCarousel';

interface Props {
  images: { src: string }[];
}

const PostImage = ({ images }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (images.length === 2) {
    return (
      <>
        <ImageWrapper onClick={handleOpenModal}>
          <ImageSection>
            <img
              src={createImagePath(images[0].src)}
              alt="이미지"
              className="first_image"
            />
          </ImageSection>
          <ImageSection>
            <img
              src={createImagePath(images[1].src)}
              alt="이미지"
              className="second_image"
            />
          </ImageSection>
        </ImageWrapper>
      </>
    );
  }

  if (images.length === 3) {
    return (
      <>
        <ImageWrapper onClick={handleOpenModal}>
          <ImageSection>
            <img
              src={createImagePath(images[0].src)}
              alt="이미지"
              className="first_image"
            />
          </ImageSection>
          <ImageSection>
            <img
              src={createImagePath(images[1].src)}
              alt="이미지"
              className="center_image"
            />
          </ImageSection>
          <ImageSection>
            <img
              src={createImagePath(images[2].src)}
              alt="이미지"
              className="second_image"
            />
          </ImageSection>
        </ImageWrapper>
        <PostImageCarousel
          images={images}
          isOpenModal={isModalOpen}
          handleCloseModal={handleCloseModal}
        />
      </>
    );
  }

  if (images.length === 1) {
    return (
      <ImageWrapper>
        <img
          src={createImagePath(images[0].src)}
          alt="이미지"
          className="image_content"
        />
      </ImageWrapper>
    );
  }

  return <></>;
};

export default PostImage;
