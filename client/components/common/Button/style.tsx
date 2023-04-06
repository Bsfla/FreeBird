import styled from '@emotion/styled';
import theme from 'styles/theme';

export const StyledButton = styled.button`
  width: 20rem;
  padding: 15px;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.white};
  font-size: 20px;
  margin-top: 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:active {
    background-color: ${theme.colors.sub2};
  }

  ${theme.media.laptop} {
    width: 50%;
  }

  &:disabled {
    background-color: ${theme.colors.gray2};
  }
`;
