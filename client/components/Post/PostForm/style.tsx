import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 36rem;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
  position: relative;

  button {
    margin: 0 auto;
    font-size: 15px;
  }

  span {
    color: ${theme.colors.sub};
    font-weight: bold;
    margin-bottom: 20px;
  }

  ${theme.media.tablet} {
    width: 90%;
  }
`;
