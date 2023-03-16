import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 150px;
  span {
    font-weight: bold;
    margin-top: 15px;
  }

  ${theme.media.mobile2} {
    width: 100%;
  }
`;
