import React from 'react';
import { Modal } from '@components/index';

interface Props {
  isOpen: boolean;
}

const ProfileEditModal = ({ isOpen }: Props) => {
  return (
    <Modal.Frame isOpen={isOpen}>
      <Modal.Header>프로필 수정</Modal.Header>
      <Modal.Body>프로필 수정하기</Modal.Body>
      <Modal.Footer>작성하기</Modal.Footer>
    </Modal.Frame>
  );
};

export default ProfileEditModal;
