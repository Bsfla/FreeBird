import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrrapper = styled.div`
  width: 7rem;
  height: 10rem;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 5px;

  .nickname {
    font-size: 12px;
    font-weight: bold;
    color: ${theme.colors.gray1};
    margin-top: 5px;
  }
`;

export const Button = styled.button`
  width: 4rem;
  height: 20px;
  padding: 3px;
  font-size: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.white};
`;

export const DeleteButton = styled.button`
  width: 4rem;
  height: 20px;
  padding: 3px;
  font-size: 8px;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.gray1};
  color: ${theme.colors.white};
`;
