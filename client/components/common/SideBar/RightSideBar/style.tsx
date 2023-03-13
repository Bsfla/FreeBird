import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrrapper = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  height: 100vh;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${theme.colors.sub};

  ${theme.media.laptop} {
    display: none;
  }
`;
