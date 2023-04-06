import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrapper = styled.header`
  width: 33rem;
  margin-top: 10px;
  margin-bottom: 25px;
  .user_nickname {
    font-weight: bold;
    font-size: 20px;
    margin-left: 20px;
    color: ${theme.colors.sub};
  }

  ${theme.media.laptop} {
    height: 100%;
    text-align: center;
    margin-right: 12px;
  }

  ${theme.media.tablet} {
    width: 80%;
  }

  ${theme.media.mobile2} {
    width: 100%;
    margin-top: 0;
    top: 30px;
  }
`;
