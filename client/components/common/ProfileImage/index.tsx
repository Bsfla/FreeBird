import React from 'react';
import { Image } from './style';
import { createImagePath } from '@lib/utils';
import profile from '@assets/img/profile.png';
import { ProfileImageType } from '@lib/types';

interface Props {
  imgPath: ProfileImageType;
}

const ProfileImage = ({ imgPath }: Props) => {
  return (
    <Image>
      <img src={imgPath !== null ? createImagePath(imgPath.src) : profile} />
    </Image>
  );
};

export default ProfileImage;
