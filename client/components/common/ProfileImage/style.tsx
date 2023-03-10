import styled from 'styled-components';
import theme from 'styles/theme';

export const Image = styled.div<{ size?: string }>`
  display: flex;
  justify-content: center;
  width: ${(props) => (props.size === 'Large' ? '4rem' : '3rem')};
  height: ${(props) => (props.size === 'Large' ? '70px' : '50px')};
  background-color: ${theme.colors.gray2};
  border-radius: 5px;

  img {
    width: 100%;
    border-radius: 5px;
    height: 100%;
  }
`;
