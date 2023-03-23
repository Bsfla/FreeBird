import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 33rem;
  margin: 0 auto;
  padding-left: 13px;
  padding-bottom: 20px;

  ${theme.media.laptop} {
    justify-content: center;
    margin-top: 20px;
  }
`;
