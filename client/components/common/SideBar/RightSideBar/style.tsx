import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrrapper = styled.aside`
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  height: 100vh;
  padding: 20px 30px 20px 20px;
  background-color: ${theme.colors.sub};

  ${theme.media.laptop} {
    display: none;
  }

  ${theme.media.large} {
    position: sticky;
  }
`;
