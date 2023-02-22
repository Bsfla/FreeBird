import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 18px;
  font-size: 14px;
  flex: 1;
  white-space: pre-line;
`;

export const HashTag = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 10px;
  cursor: pointer;

  span {
    color: blue;
    font-weight: bold;
  }
`;
