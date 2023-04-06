import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrrapper = styled.div`
  background-color: ${theme.colors.white};
  margin-bottom: 50px;
  border-radius: 20px;
  padding: 18px;
  width: 36rem;
  padding-left: 42px;

  span {
    font-weight: bold;
  }
  .user_name {
    color: ${theme.colors.sub3};
  }

  ${theme.media.tablet} {
    width: 90%;
  }
`;
