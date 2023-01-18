import React, { useState } from 'react';
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
import { UserInfoType, UserProfileEditType } from '@lib/types';
import { useInput } from '@hooks/index';
import { upLoadImages } from '@apis/post';
import { editProfile } from '@apis/profile';

interface Props {
  profile: UserInfoType;
}

const ProfileEditModal = ({ profile }: Props) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalAtomState);
  const { form, handleChangeInput } = useInput({
    nickname: profile.nickname,
    intro: '',
  });
  const [imgPath, setImagePath] = useState('');

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFormData = new FormData();

    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });

    try {
      const { data } = await upLoadImages(imageFormData);

      setImagePath(data[0]);
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleSubmitProfile = async () => {
    const formData = new FormData();
    const { nickname, intro } = form;

    formData.append('nickname', nickname);
    formData.append('intro', intro);
    formData.append('image', imgPath);

    try {
      const response = await editProfile({ formData, userId: profile.id });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

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
            <label>
              <ProfileImage />
              <input
                type="file"
                name="image"
                accept=".gif, .jpg, .png"
                onChange={handleImageChange}
                multiple
              />
            </label>
            <ImageEditButton>이미지 삭제</ImageEditButton>
          </ImageWrapper>
          <ModalEditContent>
            <label>닉네임</label>
            <Input
              value={form.nickname}
              onChange={handleChangeInput}
              name="nickname"
            />
            <label>1줄 자기소개</label>
            <Input
              placeholder="자기 소개를 입력해주세요"
              value={form.intro}
              onChange={handleChangeInput}
              name="intro"
            />
          </ModalEditContent>
        </ModalBodyLayout>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmitProfile}>수정 하기</Button>
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default ProfileEditModal;
