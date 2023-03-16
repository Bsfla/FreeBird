import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${theme.colors.white};
  border-radius: 20px;
  width: 28rem;
  height: 15rem;
  margin-bottom: 50px;

  div:nth-of-type(1) {
    margin-top: 15px;
    width: 4rem;
    height: 4rem;
  }
  div:nth-of-type(2) {
    margin-top: 15px;
    font-size: 14px;

    font-weight: bold;
  }

  .nickname {
    color: ${theme.colors.sub};
    font-weight: bold;
    margin-right: 5px;
  }

  .intro {
    margin-top: 15px;
    font-size: 13px;
    font-weight: bold;
  }

  .follow {
    display: flex;
    align-items: center;
    margin-top: 12px;
    gap: 5px;
    font-size: 13px;
  }

  ${theme.media.tablet} {
    width: 90%;
  }
`;

export const Button = styled.button`
  width: 10rem;
  height: 30px;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.white};
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }

  &:active {
    background-color: ${theme.colors.sub2};
  }
`;
