import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrapper = styled.header`
  width: 100%;
  padding: 30px;
  background-color: ${theme.colors.main};
  margin-bottom: 23px;
  display: flex;
  justify-content: center;

  div {
    margin-right: 35px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderButton = styled.button<{ isLocated: boolean }>`
  width: 100px;
  padding: 12px;
  background-color: ${(props) =>
    props.isLocated ? theme.colors.sub : theme.colors.main};
  border: none;
  border-radius: 10px;
  color: ${(props) =>
    props.isLocated ? theme.colors.white : theme.colors.sub};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
