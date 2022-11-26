import styled from 'styled-components';
import theme from 'styles/theme';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }

  span {
    color: ${theme.colors.sub};
    font-family: ${theme.font.title};
    font-size: 30px;
    margin-left: 10px;
  }
`;

export const Button = styled.button`
  
`
