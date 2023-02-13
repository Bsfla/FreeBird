import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrrapper = styled.aside`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  width: 30rem;
  height: 100vh;
  padding: 20px;
  background-color: ${theme.colors.sub};
`;
