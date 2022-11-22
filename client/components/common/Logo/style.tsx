import styled from 'styled-components';
import theme from 'styles/theme';
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
  }

  span {
    color: ${theme.colors.sub};
    font-family: ${theme.font.title};
    font-size: 36px;
    margin-left: 10px;
  }
`;