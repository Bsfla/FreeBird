import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrrapper = styled.form`
  width: 88%;
  margin-top: 20px;
  padding: 5px 5px 5px 12px;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 12px;
`;
