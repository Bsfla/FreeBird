import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 18px;
  font-size: 13px;
  font-weight: bold;
  flex: 1;
  white-space: pre-line;
  padding-left: 8px;
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
