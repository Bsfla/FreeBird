import React, { useState } from 'react';
import { FOLLOW_PAGE, MAIN_PAGE, PROFILE_PAGE } from '@consts/route';
import LogoIcon from '@assets/svg/birdicon.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImProfile } from 'react-icons/im';
import { FaUserFriends } from 'react-icons/fa';
import Link from 'next/link';
import { Wrapper, Logo, Container, MenuList, Menu } from './style';
import theme from 'styles/theme';
import SearchInput from '@components/common/SideBar/RightSideBar/SearchInput';
import { useQuery } from 'react-query';
import { loadMyInfo } from '@apis/user';
import { queryKeys } from '@consts/queryKeys';

const MobileHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { data: user } = useQuery(queryKeys.user, () => loadMyInfo());

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <Wrapper>
      <Container>
        <Logo>
          <LogoIcon />
          <Link href={MAIN_PAGE}>
            <span>FreeBird</span>
          </Link>
        </Logo>
        <GiHamburgerMenu
          size={20}
          color={theme.colors.white}
          onClick={handleToggleMenu}
        />
      </Container>
      {isOpenMenu && (
        <MenuList>
          <Link href={`${PROFILE_PAGE}/${user?.id}`}>
            <Menu>
              <ImProfile color={theme.colors.white} />
              <span>프로필 정보</span>
            </Menu>
          </Link>
          <Link href={`${FOLLOW_PAGE}/${user?.id}/following`}>
            <Menu>
              <FaUserFriends color={theme.colors.white} />
              <span>팔로우 목록</span>
            </Menu>
          </Link>
          <SearchInput />
        </MenuList>
      )}
    </Wrapper>
  );
};

export default MobileHeader;
