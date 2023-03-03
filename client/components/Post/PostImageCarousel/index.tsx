import React from 'react';
import { ModalCustomFrame } from '@components/common/Modal';
import Carousel from '@components/common/Carousel';
import { createImagePath } from '@lib/utils';
import { ModalType } from '@lib/types';

interface Props {
  isShow: boolean;
  hideModal: () => void;
  modal: ModalType;
}

const PostImageCarousel = ({ isShow, hideModal, modal }: Props) => {
  return (
    <ModalCustomFrame isOpen={isShow} handleCloseModal={hideModal}>
      <Carousel>
        {modal.images?.map((image) => (
          <img key={image.src} src={createImagePath(image.src)} />
        ))}
      </Carousel>
    </ModalCustomFrame>
  );
};

export default PostImageCarousel;
