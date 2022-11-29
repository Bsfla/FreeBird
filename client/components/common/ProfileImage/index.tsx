import React from 'react';
import { Image } from './style';
import profile from '@assets/img/profile.png';

const ProfileImage = () => {
  return (
    <Image>
      <img src={profile} />
    </Image>
  );
};

export default ProfileImage;
