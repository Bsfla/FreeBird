import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const MainContents = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
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
