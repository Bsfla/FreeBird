import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .button_wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;
export const Form = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 20px;
  resize: none;
  border: solid ${theme.colors.gray2};
  border-radius: 10px;

  &:focus {
    outline: solid ${theme.colors.sub};
    border: none;
  }
`;

export const Button = styled.button`
  width: 6rem;
  height: 30px;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.white};
  font-size: 13px;
  margin-top: 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: relative;
  &:active {
    background-color: ${theme.colors.sub2};
  }
`;
