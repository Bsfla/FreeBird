import styled from 'styled-components';

export const Wrrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 33rem;
  margin: 0 auto;
  padding-left: 13px;
`;

export const NotUserList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  span {
    font-weight: bold;
  }
`;

export const EndUserList = styled.div`
  width: 100%;
  height: 10px;
`;
