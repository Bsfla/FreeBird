import ProfileImage from '@components/common/ProfileImage';
import { LOGIN_PAGE, PROFILE_PAGE } from '@consts/route';
import { ProfileImageType } from '@lib/types';
import { createDate } from '@lib/utils';
import Link from 'next/link';
import React from 'react';
import { PostHead, PostInfo } from './style';

interface Props {
  nickName: string;
  date: string;
  imgPath: ProfileImageType;
  writerId: number;
}

const WriteInfo = ({ nickName, date, imgPath, writerId }: Props) => {
  return (
    <Link href={`${PROFILE_PAGE}/${writerId}`}>
      <PostHead onClick={(e) => e.stopPropagation()}>
        <ProfileImage imgPath={imgPath} />
        <PostInfo>
          <span className="user_name">{nickName}</span>
          <span className="date">{createDate(date)}</span>
        </PostInfo>
      </PostHead>
    </Link>
  );
};

export default WriteInfo;
