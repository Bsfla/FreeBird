import { ProfileImage } from '@components/common';
import { createDate } from '@lib/utils';
import React from 'react';
import { PostHead, PostInfo } from './style';

interface Props {
  [key: string]: string;
}

const WriteInfo = ({ nickName, date }: Props) => {
  return (
    <PostHead>
      <ProfileImage />
      <PostInfo>
        <span className="user_name">{nickName}</span>
        <span className="date">{createDate(date)}</span>
      </PostInfo>
    </PostHead>
  );
};

export default WriteInfo;
