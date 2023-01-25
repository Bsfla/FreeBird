import { MainLayout } from '@components/common';
import { FOLLOWER_PAGE, FOLLOWING_PAGE } from '@consts/route';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement, useMemo } from 'react';
import { Header, Navigation, Menu } from './style';

interface Props {
  children: ReactElement;
}

const FollowPageLayout = ({ children }: Props) => {
  const router = useRouter();
  const { id } = router.query;

  const isLocated = useMemo(() => {
    const routeLocation = router.pathname.slice(13);

    if (routeLocation === 'follower') return true;
    else return false;
  }, [router]);

  return (
    <MainLayout>
      <Header>
        <span className="user_nickname">
          <span className="nickname">#랜턴랜턴</span>님의 팔로우
        </span>
        <Navigation>
          <Link href={`${FOLLOWER_PAGE(Number(id))}`}>
            <Menu isLocated={isLocated}>
              <span>팔로워</span>
              <div className="location" />
            </Menu>
          </Link>
          <Link href={`${FOLLOWING_PAGE(Number(id))}`}>
            <Menu isLocated={!isLocated}>
              <span>팔로잉</span>
              <div className="location" />
            </Menu>
          </Link>
        </Navigation>
      </Header>
      {children}
    </MainLayout>
  );
};

export default FollowPageLayout;
