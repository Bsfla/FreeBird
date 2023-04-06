import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrraper = styled.section`
  width: 36rem;
  min-height: 15rem;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  padding: 18px;
  margin-top: 20px;
  margin-bottom: 20px;

  .comment_count {
    font-weight: bold;
  }

  ${theme.media.tablet} {
    width: 90%;
    height: 100%;
  }
`;
