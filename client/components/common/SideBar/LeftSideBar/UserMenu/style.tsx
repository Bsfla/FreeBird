import styled from 'styled-components';
import theme from 'styles/theme';

export const MainProfile = styled.div`
  display: flex;
  width: 16.7rem;
  height: 7rem;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  margin-top: 25px;
  padding: 20px;
  position: sticky;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 5rem;
  height: 75px;
  background-color: ${theme.colors.gray2};
  border-radius: 5px;

  img {
    width: 80%;
    height: 100%;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  .nickname {
    font-size: 14px;
    color: ${theme.colors.sub};
    font-weight: bold;
  }
`;

export const Button = styled.button`
  width: 10rem;
  height: 100%;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.white};
  font-size: 13px;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &:active {
    background-color: ${theme.colors.sub2};
  }
`;
