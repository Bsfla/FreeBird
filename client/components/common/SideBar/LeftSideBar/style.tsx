import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrraper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 22rem;
  height: 100vh;
  padding: 20px;
`;

export const MainProfile = styled.div`
  display: flex;
  width: 19rem;
  height: 7rem;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  margin-top: 25px;
  padding: 20px;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 5rem;
  height: 75px;
  background-color: ${theme.colors.gray2};
  border-radius: 5px;

  img {
    width: 80%;
    height: 100%;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  .nickname {
    font-size: 14px;
    color: ${theme.colors.sub};
    font-weight: bold;
  }
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
`;
