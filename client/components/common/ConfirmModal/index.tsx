import React, { useState } from 'react';
import { ModalCustomFrame } from '@components/common/Modal';
import { Wrapper, ButtonGroup, Button } from './style';
import { useModal } from '@hooks/common';
import { modalName } from '@consts/modal';
import { UseMutateFunction } from 'react-query';

interface Props {
  remove: () => void;
  title: string;
}

const ConfirmModal = ({ remove, title }: Props) => {
  const { isShow, hideModal } = useModal(modalName.CONFIRM_REMOVE);

  const handleCloseModal = () => {
    hideModal();
  };

  const handleConfirm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    remove();
    hideModal();
  };

  return (
    <ModalCustomFrame isOpen={isShow} handleCloseModal={handleCloseModal}>
      <Wrapper>
        <span className="title">{title}삭제</span>
        <span className="content">삭제하시겠습니까?</span>
        <ButtonGroup>
          <div onClick={handleCloseModal}>취소</div>
          <Button onClick={handleConfirm}>확인</Button>
        </ButtonGroup>
      </Wrapper>
    </ModalCustomFrame>
  );
};

export default ConfirmModal;
