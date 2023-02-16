import React, { useState } from 'react';
import { Modal, Carousel } from '@components/index';
import { useRecoilState } from 'recoil';
import { modalAtomState } from '@recoil/modal';
import { createImagePath } from '@lib/utils';

interface Props {
  images: { src: string }[];
  isOpenModal: boolean;
  handleCloseModal: () => void;
}

const PostImageCarousel = ({
  images,
  isOpenModal,
  handleCloseModal,
}: Props) => {
  return (
    <Modal.CustomFrame isOpen={isOpenModal} handleCloseModal={handleCloseModal}>
      <Carousel>
        {images.map((image) => (
          <img key={image.src} src={createImagePath(image.src)} />
        ))}
      </Carousel>
    </Modal.CustomFrame>
  );
};

export default PostImageCarousel;
