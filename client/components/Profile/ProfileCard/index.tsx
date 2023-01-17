import React from 'react';
import { ProfileImage } from '@components/index';
import { Wrapper, Button } from './style';
import { useSetRecoilState } from 'recoil';
import { modalAtomState } from '@recoil/modal';

const ProfileCard = () => {
  const setModalState = useSetRecoilState(modalAtomState);

  const handleOpenModal = () => {
    setModalState(true);
  };

  return (
    <Wrapper>
      <ProfileImage />
      <div>
        <span className="nickname">랜턴랜턴</span>님
      </div>
      <span className="intro">소개글이 비어있습니다</span>
      <div className="follow">
        <span>팔로워 20 |</span>
        <span> 팔로잉 20</span>
      </div>
      <Button onClick={handleOpenModal}>프로필 수정</Button>
    </Wrapper>
  );
};

export default ProfileCard;
