import styled from 'styled-components';
import theme from 'styles/theme';

export const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 3rem;
  height: 50px;
  background-color: ${theme.colors.gray2};
  border-radius: 5px;

  img {
    width: 80%;
    height: 100%;
  }
`;
