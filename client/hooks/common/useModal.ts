import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalListState, modalState } from '@recoil/modal';
import { ModalName } from '@lib/types';

const useModal = (modalName: ModalName) => {
  const [modalList, setModalList] = useRecoilState(modalListState);
  const modal = useRecoilValue(modalState(modalName));

  const { isShow } = modal;

  const showModal = () => {
    setModalList(
      modalList.map((modal) => {
        return {
          ...modal,
          isShow: modal.name === modalName ? true : false,
        };
      })
    );
  };

  const hideModal = () => {
    setModalList(
      modalList.map((modal) => {
        return {
          ...modal,
          isShow: modal.name === modalName ? false : modal.isShow,
        };
      })
    );
  };

  const showImageModal = (images: { src: string }[]) => {
    setModalList(
      modalList.map((modal) => {
        return {
          ...modal,
          isShow: modal.name === modalName ? true : false,
          images,
        };
      })
    );
  };

  useEffect(() => {
    if (isShow) document.body.style.overflow = 'hidden';
    else document.body.style.removeProperty('overflow');
  }, [isShow]);

  return { isShow, showModal, hideModal, showImageModal, modal };
};

export default useModal;
