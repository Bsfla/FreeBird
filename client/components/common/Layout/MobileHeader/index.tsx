import React, { useState } from 'react';
import {
  FOLLOW_PAGE,
  FREIND_RECOMMEND_PAGE,
  MAIN_PAGE,
  PROFILE_PAGE,
} from '@consts/route';
import LogoIcon from '@assets/svg/birdicon.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { ImProfile } from 'react-icons/im';
import { FaUserFriends, FaUserPlus } from 'react-icons/fa';
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
        {!isOpenMenu ? (
          <GiHamburgerMenu
            size={20}
            color={theme.colors.white}
            onClick={handleToggleMenu}
          />
        ) : (
          <IoMdClose
            size={30}
            color={theme.colors.white}
            onClick={handleToggleMenu}
          />
        )}
      </Container>
      {isOpenMenu && (
        <MenuList>
          <Link href={`${PROFILE_PAGE}/${user?.id}`}>
            <Menu className="mypage">
              <ImProfile color={theme.colors.white} />
              <span>마이 페이지</span>
            </Menu>
          </Link>
          <Link href={`${FOLLOW_PAGE}/${user?.id}/following`}>
            <Menu className="friend">
              <FaUserFriends color={theme.colors.white} />
              <span>친구 목록</span>
            </Menu>
          </Link>
          <Link href={`${FREIND_RECOMMEND_PAGE}`}>
            <Menu className="friend">
              <FaUserPlus color={theme.colors.white} />
              <span>친구 찾기</span>
            </Menu>
          </Link>
          <SearchInput />
        </MenuList>
      )}
    </Wrapper>
  );
};

export default MobileHeader;
