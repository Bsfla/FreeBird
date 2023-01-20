import React from 'react';
import { ProfileImage } from '@components/index';
import { Wrapper, Button } from './style';
import { useSetRecoilState } from 'recoil';
import { modalAtomState } from '@recoil/modal';
import { UserInfoType } from '@lib/types';

interface Props {
  profile: UserInfoType;
}

const ProfileCard = ({ profile }: Props) => {
  const setModalState = useSetRecoilState(modalAtomState);

  const handleOpenModal = () => {
    setModalState(true);
  };

  return (
    <Wrapper>
      <ProfileImage imgPath={profile.ProfileImage} />
      <div>
        <span className="nickname">{profile.nickname}</span>님
      </div>
      <span className="intro">
        {profile.intro.length ? profile.intro : '소개글이 비어있습니다'}
      </span>
      <div className="follow">
        <span>팔로워 20 |</span>
        <span> 팔로잉 20</span>
      </div>
      <Button onClick={handleOpenModal}>프로필 수정</Button>
    </Wrapper>
  );
};

export default ProfileCard;
