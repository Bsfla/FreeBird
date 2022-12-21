import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrraper = styled.article`
  display: flex;
  flex-direction: column;
  width: 36rem;
  min-height: 15rem;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  padding: 18px;
`;

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
  }
`;

export const PostHead = styled.div`
  display: flex;
  align-items: center;
`;

export const PostContent = styled.div`
  width: 100%;
  margin-top: 18px;
  font-size: 14px;
  flex: 1;
`;

export const PostHashTag = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 10px;
  cursor: pointer;

  span {
    color: blue;
    font-weight: bold;
  }
`;

export const PostButtonGroup = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 29px;
`;

export const RetwwetButton = styled.button`
  display: flex;
  align-items: center;
  width: 4rem;
  background-color: ${theme.colors.white};
  border: none;
  cursor: pointer;

  svg {
    margin-right: 15px;
  }
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  width: 4rem;
  background-color: ${theme.colors.white};
  border: none;
  cursor: pointer;

  svg {
    margin-right: 15px;
  }
`;

export const CommentButton = styled.button`
  display: flex;
  align-items: center;
  width: 4rem;
  background-color: ${theme.colors.white};
  border: none;
  cursor: pointer;

  svg {
    margin-right: 15px;
  }
`;
