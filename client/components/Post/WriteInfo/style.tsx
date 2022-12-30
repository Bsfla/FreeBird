import styled from 'styled-components';
import theme from 'styles/theme';

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  .user_name {
    color: ${theme.colors.gray1};
    font-weight: bold;
    font-size: 13px;
  }

  .date {
    font-size: 11px;
    margin-top: 6px;
  }
`;

export const PostHead = styled.div`
  display: flex;
  align-items: center;
`;
