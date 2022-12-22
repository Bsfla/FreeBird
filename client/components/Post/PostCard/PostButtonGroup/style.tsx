import styled from 'styled-components';
import theme from 'styles/theme';

export const ButtonGroup = styled.div`
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

  .like_heart {
    color: #f06292;
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
