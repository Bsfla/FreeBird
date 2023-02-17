import React, { useState } from 'react';
import { ImageWrapper, ImageSection } from './style';
import { createImagePath } from '@lib/utils';
import { useModal } from '@hooks/common';
import { modalName } from '@consts/modal';

interface Props {
  images: { src: string }[];
}

const PostImage = ({ images }: Props) => {
  const { showImageModal } = useModal(modalName.POST_IMAGE);

  const handleOpenZoomImage = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    showImageModal(images);
  };

  if (images.length === 2) {
    return (
      <>
        <ImageWrapper onClick={handleOpenZoomImage}>
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
        <ImageWrapper onClick={handleOpenZoomImage}>
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
      </>
    );
  }

  if (images.length === 1) {
    return (
      <ImageWrapper onClick={handleOpenZoomImage}>
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
