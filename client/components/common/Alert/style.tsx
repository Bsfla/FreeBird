import styled, { css } from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.div<{ isOpen: boolean }>`
  background-color: ${theme.colors.sub4};
  font-size: 15px;
  font-weight: bold;
  color: ${theme.colors.sub};
  position: fixed;
  top: 50;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
  }
  ${(props) =>
    props.isOpen
      ? css`
          opacity: 1;
          width: 250px;
          height: 50px;
          transition: width 0.1s, height 0.1s, opacity 0.1s 0.1s;
        `
      : css`
          opacity: 0;
          width: 0;
          height: 0;
          padding: 0;
          transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s;
          span {
            display: none;
          }
        `}
`;
