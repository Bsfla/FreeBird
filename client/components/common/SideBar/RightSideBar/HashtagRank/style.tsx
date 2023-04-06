import Link from 'next/link';
import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrrapper = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: ${theme.colors.white};
    margin-bottom: 15px;
    font-weight: bold;
  }
`;

export const HashtagContainer = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: ${theme.colors.white};
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const Hashtag = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  border-bottom: solid ${theme.colors.gray3};
  align-items: center;
  font-weight: bold;
  padding-left: 20px;
  cursor: pointer;

  .name {
    font-size: 18px;
    color: ${theme.colors.sub};
    margin-left: 20px;
  }
  .tag {
    color: ${theme.colors.sub};
  }
`;
