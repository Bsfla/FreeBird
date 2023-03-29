import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 15rem;
  background-color: ${theme.colors.white};
  padding: 28px;
  position: relative;

  .title {
    font-weight: bold;
    font-size: 25px;
  }

  .content {
    margin-top: 40px;
    font-size: 18px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 10px;

  div {
    width: 4rem;
    height: 30px;

    color: ${theme.colors.sub};
    font-size: 15px;
    font-weight: bold;
    margin-top: 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 4rem;
  height: 30px;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.white};
  font-size: 13px;
  font-weight: bold;
  margin-top: 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:active {
    background-color: ${theme.colors.sub2};
  }
`;
