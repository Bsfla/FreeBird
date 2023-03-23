import styled from 'styled-components';
import theme from 'styles/theme';

export const Header = styled.header`
  position: sticky;
  background-color: ${theme.colors.main};
  width: 33rem;
  margin-top: 10px;
  top: 0px;
  margin-bottom: 15px;

  .user_nickname {
    font-weight: bold;
    margin-left: 20px;
    .nickname {
      color: ${theme.colors.sub3};
    }
  }

  ${theme.media.laptop} {
    top: 58px;
    height: 100%;
  }

  ${theme.media.tablet} {
    width: 80%;
  }

  ${theme.media.mobile2} {
    width: 100%;
    margin-top: 0;
    top: 30px;

    .user_nickname {
      margin-left: 50px;
      margin-top: 55px;
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
