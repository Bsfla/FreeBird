import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrraper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-left: 35px;
  padding-top: 20px;

  ${theme.media.laptop} {
    display: none;
  }
`;

export const MainProfile = styled.div`
  display: flex;
  width: 17rem;
  height: 4rem;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  margin-top: 25px;
  padding: 20px;
`;

export const LogoContainer = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  width: 10rem;
  height: 100%;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.white};
  font-size: 13px;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &:active {
    background-color: ${theme.colors.sub2};
  }
`;

export const PageMenuList = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PageMenu = styled.li`
  width: 19rem;
  background-color: ${theme.colors.white};
  padding: 10px;
  border-radius: 20px;
  color: ${theme.colors.sub};
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;

  svg {
    margin-right: 15px;
  }

  &:hover {
    background-color: ${theme.colors.sub};

    color: ${theme.colors.white};
  }
`;

export const AuthPageList = styled.ul`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
