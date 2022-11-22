import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.header`
  width: 100%;
  padding: 30px;
  background-color: ${theme.colors.main};
  margin-bottom: 70px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderButton = styled.button`
  width: 120px;
  padding: 15px;
  background-color: ${theme.colors.sub};
  border: none;
  border-radius: 10px;
  color: ${theme.colors.white};
  font-size: 14px;
  cursor: pointer;
  &:active {
    background-color: ${theme.colors.sub};
  }

  &:hover {
    background-color: ${theme.colors.sub2};
  }
`;
