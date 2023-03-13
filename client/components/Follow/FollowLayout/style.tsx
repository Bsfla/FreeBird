import styled from 'styled-components';
import theme from 'styles/theme';

export const Header = styled.header`
  position: sticky;
  top: 0px;
  z-index: 100000;
  background-color: ${theme.colors.main};
  padding-top: 15px;
  width: 33rem;

  .user_nickname {
    font-weight: bold;
    margin-left: 20px;
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
  margin-top: 11px;
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

export const UserList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;
