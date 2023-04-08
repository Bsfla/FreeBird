import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrapper = styled.header`
  width: 100%;
  display: none;
  background-color: ${theme.colors.sub};
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 100000;

  svg {
    cursor: pointer;
  }

  ${theme.media.laptop} {
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  span {
    color: ${theme.colors.white};
    font-family: ${theme.font.title};
    font-size: 20px;
    margin-left: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  gap: 20px;

  .mypage {
    padding-left: 15px;
  }

  .logout {
    margin-right: 7px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 15rem;
  border-radius: 10px;
  cursor: pointer;

  span {
    color: ${theme.colors.white};
    font-weight: bold;
  }
`;
