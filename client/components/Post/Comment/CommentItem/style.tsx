import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 14px;

  span {
    margin-top: 15px;
  }
`;

export const CommentHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentEdit = styled.div`
  display: flex;
  gap: 10px;
  font-size: 11px;
`;

export const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
  margin-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
`;
