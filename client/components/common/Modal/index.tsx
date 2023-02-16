import React from 'react';
import {
  StyleModalBody,
  StyleModalFooter,
  StyleModalFrame,
  StyleModalHeader,
  StyleOverlay,
  StyleCustomFrame,
} from './style';

import { ModalProps } from '@lib/types';

const ModalCustomFrame = ({
  isOpen,
  children,
  handleCloseModal,
}: ModalProps) => {
  return (
    <>
      <StyleCustomFrame isOpen={isOpen} onClick={handleCloseModal}>
        {children}
      </StyleCustomFrame>
    </>
  );
};

const ModalFrame = ({ isOpen, children, handleCloseModal }: ModalProps) => {
  return (
    <>
      <StyleOverlay isOpen={isOpen} onClick={handleCloseModal} />
      <StyleModalFrame isOpen={isOpen}>{children}</StyleModalFrame>
    </>
  );
};

const ModalHeader = ({ children }: Pick<ModalProps, 'children'>) => {
  return <StyleModalHeader>{children}</StyleModalHeader>;
};

const ModalBody = ({ children }: Pick<ModalProps, 'children'>) => {
  return <StyleModalBody>{children}</StyleModalBody>;
};

const ModalFooter = ({ children }: Pick<ModalProps, 'children'>) => {
  return <StyleModalFooter>{children}</StyleModalFooter>;
};

const Modal = {
  Frame: ModalFrame,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  CustomFrame: ModalCustomFrame,
};

export default Modal;
