import React from 'react';
import Logo from '@components/common/Logo';
import { Wrraper, PageMenuList, PageMenu } from './style';
import { ImProfile } from 'react-icons/im';
import { FaUserFriends } from 'react-icons/fa';
import { loadMyInfo } from '@apis/user';
import { PROFILE_PAGE, FOLLOW_PAGE } from '@consts/route';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { queryKeys } from '@consts/queryKeys';
import UserMenu from './UserMenu';

const LeftSideBar = () => {
  const { data: user } = useQuery(queryKeys.user, () => loadMyInfo());

  return (
    <Wrraper>
      <Logo />
      <UserMenu />
      <PageMenuList>
        <Link href={`${PROFILE_PAGE}/${user?.id}`}>
          <PageMenu>
            <ImProfile size={20} />
            <span>프로필 정보</span>
          </PageMenu>
        </Link>
        <Link href={`${FOLLOW_PAGE}/${user?.id}/following`}>
          <PageMenu>
            <FaUserFriends size={20} />
            팔로우 목록
          </PageMenu>
        </Link>
      </PageMenuList>
    </Wrraper>
  );
};

export default LeftSideBar;
