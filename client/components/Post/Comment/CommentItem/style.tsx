import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 14px;

  .comment_content {
    margin-top: 15px;
    padding-left: 12px;
    margin-bottom: 15px;
    white-space: pre-line;
  }

  .reply_comment {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 9px;
    cursor: pointer;

    span {
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const CommentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentEdit = styled.div`
  display: flex;
  gap: 10px;
  font-size: 11px;
  cursor: pointer;
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
