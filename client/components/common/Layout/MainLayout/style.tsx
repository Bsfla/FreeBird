import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 50px;

  ${theme.media.laptop} {
    flex-direction: column;
  }
`;

export const MainContents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  width: 100%;
  z-index: 500;
  ${theme.media.large} {
    width: auto;
    padding-top: 20px;
  }

  ${theme.media.laptop} {
    margin-left: 0px;
    padding-top: 0px;
  }
`;

export const IntroBar = styled.div`
  width: 36rem;
  height: 50px;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${theme.colors.gray1};
    font-weight: bold;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  ${theme.media.large} {
    width: 40rem;
  }
`;
