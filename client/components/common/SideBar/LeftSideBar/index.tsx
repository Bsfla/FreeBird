import React from 'react';
import Logo from '@components/common/Logo';
import { Wrraper, PageMenuList, PageMenu, LogoContainer } from './style';
import { ImProfile } from 'react-icons/im';
import { FaUserFriends, FaUserPlus } from 'react-icons/fa';
import { loadMyInfo } from '@apis/user';
import {
  PROFILE_PAGE,
  FOLLOW_PAGE,
  FREIND_RECOMMEND_PAGE,
} from '@consts/route';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { queryKeys } from '@consts/queryKeys';
import UserMenu from './UserMenu';
import { useRouter } from 'next/router';
import path from 'path';

const LeftSideBar = () => {
  const { data: user } = useQuery(queryKeys.user, () => loadMyInfo());
  const router = useRouter();

  const pathName = router.pathname;

  return (
    <Wrraper>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <UserMenu />
      <PageMenuList>
        <Link href={`${PROFILE_PAGE}/${user?.id}`}>
          <PageMenu isLocation={pathName === PROFILE_PAGE}>
            <ImProfile size={20} />
            <span>마이 페이지</span>
          </PageMenu>
        </Link>
        <Link href={`${FOLLOW_PAGE}/${user?.id}/following`}>
          <PageMenu isLocation={pathName.includes(FOLLOW_PAGE)}>
            <FaUserFriends size={20} />
            친구 목록
          </PageMenu>
        </Link>
        <Link href={`${FREIND_RECOMMEND_PAGE}`}>
          <PageMenu isLocation={pathName === FREIND_RECOMMEND_PAGE}>
            <FaUserPlus size={20} />
            친구 찾기
          </PageMenu>
        </Link>
      </PageMenuList>
    </Wrraper>
  );
};

export default LeftSideBar;
