import React from 'react';
import { Image } from './style';
import { createImagePath } from '@lib/utils';
import profile from '@assets/img/profile.png';
import { ProfileImageType } from '@lib/types';

interface Props {
  imgPath: ProfileImageType;
  size?: string;
}

const ProfileImage = ({ imgPath, size }: Props) => {
  return (
    <Image size={size}>
      <img src={imgPath !== null ? createImagePath(imgPath.src) : profile} />
    </Image>
  );
};

export default ProfileImage;
