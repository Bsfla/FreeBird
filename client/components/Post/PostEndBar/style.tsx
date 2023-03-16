import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36rem;

  background-color: ${theme.colors.white};
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 20px;
  padding: 18px;

  font-weight: bold;

  svg {
    margin-bottom: 15px;
  }

  ${theme.media.tablet} {
    width: 90%;
  }
`;
