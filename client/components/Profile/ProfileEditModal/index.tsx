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
import { modalAtomState } from '@recoil/modal/atom';
import { ProfileImageType, UserInfoType } from '@lib/types';
import { useInput, useEditProfile } from '@hooks/index';
import { upLoadImages } from '@apis/post';

interface Props {
  profile: UserInfoType;
}

const ProfileEditModal = ({ profile }: Props) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalAtomState);
  const { form, setForm, handleChangeInput } = useInput({
    nickname: profile.nickname,
    intro: profile.intro,
  });
  const { mutate } = useEditProfile();
  const [imgPath, setImagePath] = useState<ProfileImageType>(
    profile.ProfileImage
  );

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setImagePath(profile.ProfileImage);
    setForm({
      nickname: profile.nickname,
      intro: profile.intro,
    });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFormData = new FormData();

    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });

    try {
      const { data } = await upLoadImages(imageFormData);

      setImagePath({ src: data[0] });
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleremoveImage = () => {
    setImagePath(null);
  };

  const handleSubmitProfile = async () => {
    if (form.nickname.length === 0) {
      alert('닉네임을 적어주세요');
      return;
    }
    const formData = new FormData();
    const { nickname, intro } = form;

    formData.append('nickname', nickname);
    formData.append('intro', intro);

    if (imgPath) formData.append('image', imgPath.src);

    mutate({ formData, userId: profile.id });
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
              <ProfileImage imgPath={imgPath} />
              <input
                type="file"
                name="image"
                accept=".gif, .jpg, .png"
                onChange={handleImageChange}
                multiple
              />
            </label>
            <ImageEditButton onClick={handleremoveImage}>
              이미지 삭제
            </ImageEditButton>
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
