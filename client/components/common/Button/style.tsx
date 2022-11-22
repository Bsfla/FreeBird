import styled from 'styled-components';
import theme from 'styles/theme';

export const StyledButton = styled.button`
  width: 20rem;
  padding: 20px;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.white};
  font-size: 20px;
  margin-top: 40px;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &:active {
    background-color: ${theme.colors.sub2};
  }
`;
