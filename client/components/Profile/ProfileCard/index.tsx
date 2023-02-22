import React from 'react';
import { ProfileImage, FollowButton } from '@components/index';
import { Wrapper, Button } from './style';
import {  useRecoilValue } from 'recoil';
import { userAtomState } from '@recoil/user';
import { UserInfoType } from '@lib/types';
import { useModal } from '@hooks/common';
import { modalName } from '@consts/modal';

interface Props {
  profile: UserInfoType;
}

const ProfileCard = ({ profile }: Props) => {
  const { showModal } = useModal(modalName.PROFILE_EDIT);
  const user = useRecoilValue(userAtomState);

  const handleOpenModal = () => {
    showModal();
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
        <span>{`팔로워 ${profile.Followers.length} |`}</span>
        <span> {`팔로잉 ${profile.Followings.length}`}</span>
      </div>
      {user.id === profile.id && (
        <Button onClick={handleOpenModal}>프로필 수정</Button>
      )}
      {user.id !== profile.id && <FollowButton user={user} profile={profile} />}
    </Wrapper>
  );
};

export default ProfileCard;
