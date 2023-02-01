import styled from 'styled-components';
import theme from 'styles/theme';

export const Header = styled.header`
  width: 100%;
  position: sticky;

  .user_nickname {
    margin-left: 50px;
    font-weight: bold;

    .nickname {
      color: ${theme.colors.sub3};
    }
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 31px;
  font-weight: bold;
`;

export const Menu = styled.div<{ isLocated: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  span {
    margin-bottom: 5px;
    color: ${(props) => (props.isLocated ? '' : theme.colors.gray1)};
  }

  .location {
    display: ${(props) => (props.isLocated ? 'inline' : 'none')};
    width: 70px;
    border: solid ${theme.colors.sub3};
  }
`;
