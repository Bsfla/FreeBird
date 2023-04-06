import styled from '@emotion/styled';
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

  ${theme.media.mobile2} {
    width: 7.5rem;
  }
`;

export const Button = styled.button`
  width: 4rem;
  height: 24px;
  font-size: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.white};
  gap: 5px;
  border-radius: 5px;
  font-weight: bold;
`;

export const ProfileButton = styled.button`
  width: 4rem;
  height: 24px;
  font-size: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bface0;
  color: ${theme.colors.white};
  gap: 5px;
  border-radius: 5px;
  font-weight: bold;
`;
