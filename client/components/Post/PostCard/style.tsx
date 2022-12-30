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
  cursor: pointer;
`;

export const SharePostBlock = styled.div`
  margin-top: 20px;
  border: 3px solid #eeeeee;
  border-radius: 15px;
  margin-bottom: 15px;
  cursor: pointer;
`;
