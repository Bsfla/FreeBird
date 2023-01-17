import React from 'react';
import { Modal, ProfileImage } from '@components/index';
import {
  ModalTitle,
  ModalBodyLayout,
  ModalEditContent,
  Input,
  Button,
  ImageWrapper,
  ImageEditButton,
} from './style';
import { useRecoilState } from 'recoil';
import { modalAtomState } from '@recoil/modal';
import { UserInfoType } from '@lib/types';
import { useInput } from '@hooks/index';

interface Props {
  profile: UserInfoType;
}

const ProfileEditModal = ({ profile }: Props) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalAtomState);
  const { form, handleChangeInput } = useInput({
    nickname: profile.nickname,
    intro: '',
  });

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log(form.nickname);

  return (
    <Modal.Frame isOpen={isModalOpen} handleCloseModal={handleCloseModal}>
      <Modal.Header>
        <ModalTitle>
          <span>프로필 수정</span>
        </ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <ModalBodyLayout>
          <ImageWrapper>
            <ProfileImage />
            <ImageEditButton>이미지 삭제</ImageEditButton>
          </ImageWrapper>
          <ModalEditContent>
            <label>닉네임</label>
            <Input value={form.nickname} onChange={handleChangeInput} />
            <label>1줄 자기소개</label>
            <Input placeholder="자기 소개를 입력해주세요" />
          </ModalEditContent>
        </ModalBodyLayout>
      </Modal.Body>
      <Modal.Footer>
        <Button>수정 하기</Button>
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default ProfileEditModal;
