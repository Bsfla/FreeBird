import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 28px;
  font-size: 13px;
  font-weight: bold;
  flex: 1;
  white-space: pre-line;
  padding-left: 1px;
`;

export const HashTag = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 10px;
  cursor: pointer;
  padding-left: 7px;

  span {
    color: blue;
    font-weight: bold;
  }
`;
