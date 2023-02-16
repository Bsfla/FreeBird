import styled, { keyframes } from 'styled-components';

export const popUpAnimation = keyframes`
from{
  opacity: 0;
  transform: translateY(3rem);
}
to{
  opacity: 1;
  transform: translateY(0rem);
}
`;

export const StyleOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.15);
`;

export const StyleCustomFrame = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyleModalFrame = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 1000;
  width: 20rem;
  position: fixed;
  animation: ${popUpAnimation} 0.2s linear;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.625rem;
`;
export const StyleModalHeader = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.625rem 0.625rem 0rem 0rem;
`;
export const StyleModalBody = styled.div`
  position: relative;
  padding: 1rem;
`;
export const StyleModalFooter = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
