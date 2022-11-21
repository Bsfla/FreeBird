import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 32rem;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  margin: 0 auto;

  span {
    color: ${theme.colors.sub};
    font-weight: bold;
    margin-bottom: 25px;
  }
`;

export const Title = styled.span`
  font-family: ${theme.font.title};
  font-size: 40px;
  color: ${theme.colors.sub};
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 30rem;
  padding: 20px;
  border: solid ${theme.colors.main};
  border-radius: 20px;
  font-weight: bold;
  font-size: 15px;
  margin-top: 15px;

  &:focus {
    outline: solid ${theme.colors.sub};
    border: none;
  }
`;

export const Button = styled.button`
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

  &:hover {
    background-color: ${theme.colors.sub3};
  }
`;
