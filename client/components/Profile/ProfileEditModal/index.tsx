import React, { useState } from 'react';
import {
  ModalFrame,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@components/common/Modal';
import ProfileImage from '@components/common/ProfileImage';
import {
  ModalTitle,
  ModalBodyLayout,
  ModalEditContent,
  Input,
  Button,
  ImageWrapper,
  ImageEditButton,
} from './style';
import { ProfileImageType, UserInfoType } from '@lib/types';
import { useInput, useEditProfile, useModal } from '@hooks/index';
import { modalName } from '@consts/modal';
import { upLoadImages } from '@apis/post';

interface Props {
  profile: UserInfoType;
}

const ProfileEditModal = ({ profile }: Props) => {
  const { form, setForm, handleChangeInput } = useInput({
    nickname: profile.nickname,
    intro: profile.intro,
  });
  const { hideModal, isShow } = useModal(modalName.PROFILE_EDIT);
  const { mutate } = useEditProfile();
  const [imgPath, setImagePath] = useState<ProfileImageType>(
    profile.ProfileImage
  );

  const handleCloseModal = () => {
    hideModal();
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
      const data = await upLoadImages(imageFormData);

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
    <ModalFrame isOpen={isShow} handleCloseModal={handleCloseModal}>
      <ModalHeader>
        <ModalTitle>
          <span>프로필 수정</span>
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
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
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleSubmitProfile}>수정 하기</Button>
      </ModalFooter>
    </ModalFrame>
  );
};

export default ProfileEditModal;
