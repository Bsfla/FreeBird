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

export const ModalCustomFrame = ({
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

export const ModalFrame = ({
  isOpen,
  children,
  handleCloseModal,
}: ModalProps) => {
  return (
    <>
      <StyleOverlay isOpen={isOpen} onClick={handleCloseModal} />
      <StyleModalFrame isOpen={isOpen}>{children}</StyleModalFrame>
    </>
  );
};

export const ModalHeader = ({ children }: Pick<ModalProps, 'children'>) => {
  return <StyleModalHeader>{children}</StyleModalHeader>;
};

export const ModalBody = ({ children }: Pick<ModalProps, 'children'>) => {
  return <StyleModalBody>{children}</StyleModalBody>;
};

export const ModalFooter = ({ children }: Pick<ModalProps, 'children'>) => {
  return <StyleModalFooter>{children}</StyleModalFooter>;
};
