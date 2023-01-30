import styled from 'styled-components';
import theme from 'styles/theme';

export const Button = styled.button<{ isFollowing: boolean }>`
  width: 10rem;
  height: 30px;
  background-color: ${(props) =>
    props.isFollowing ? theme.colors.gray3 : theme.colors.sub3};
  color: ${(props) => (props.isFollowing ? 'black' : theme.colors.white)};
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`;
