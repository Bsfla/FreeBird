import Link from 'next/link';
import styled from 'styled-components';
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
`;

export const Hashtag = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  border-bottom: solid ${theme.colors.gray3};
  align-items: center;
  font-weight: bold;
  cursor: pointer;

  span {
    color: ${theme.colors.sub2};
    margin-left: 5px;
  }
`;
