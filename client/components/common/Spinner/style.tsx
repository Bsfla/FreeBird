import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const bounce = keyframes`
  0%, 80%, 100% {
      transform: scale(0);
  }
  40% {
      transform: scale(1);
  }
`;

export const LoadingDots = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const LoadingDot = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${theme.colors.sub3};
  border-radius: 60%;
  animation: 1.5s ${bounce} infinite ease-in-out both;
  margin-top: 150px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
