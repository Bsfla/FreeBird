import ProfileImage from '@components/common/ProfileImage';
import { ProfileImageType } from '@lib/types';
import { createDate } from '@lib/utils';
import React from 'react';
import { PostHead, PostInfo } from './style';

interface Props {
  nickName: string;
  date: string;
  imgPath: ProfileImageType;
}

const WriteInfo = ({ nickName, date, imgPath }: Props) => {
  return (
    <PostHead>
      <ProfileImage imgPath={imgPath} />
      <PostInfo>
        <span className="user_name">{nickName}</span>
        <span className="date">{createDate(date)}</span>
      </PostInfo>
    </PostHead>
  );
};

export default WriteInfo;
