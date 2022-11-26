import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrraper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100vh;
  padding: 20px;
  background-color: black;
`;

export const MainProfile = styled.div`
  display: flex;
  width: 16rem;
  height: 6rem;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  margin-top: 17px;
`;
