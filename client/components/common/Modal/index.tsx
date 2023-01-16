import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  StyleModalBody,
  StyleModalFooter,
  StyleModalFrame,
  StyleModalHeader,
  StyleOverlay,
} from './style';

import { ModalProps } from '@lib/types';

const ModalFrame = ({ isOpen, children }: ModalProps) => {
  return (
    <>
      <StyleOverlay isOpen={isOpen} />
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
};

export default Modal;
