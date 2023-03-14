import styled from 'styled-components';
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
    justify-content: space-between;
    align-items: center;
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
