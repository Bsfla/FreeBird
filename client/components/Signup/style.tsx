import styled, { keyframes } from 'styled-components';
import theme from 'styles/theme';

const SlideUp = keyframes`
  from {
    opacity:0;
    transform: translateY(5%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  height: auto;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  animation: ${SlideUp} 0.5s;
  margin-bottom: 50px;
  padding-bottom: 25px;

  span {
    color: ${theme.colors.sub};
    font-weight: bold;
    margin-bottom: 25px;
  }

  ${theme.media.laptop} {
    width: 80%;
  }

  .login {
    margin-top: 20px;
    cursor: pointer;
  }
`;

export const Title = styled.span`
  font-family: ${theme.font.title};
  font-size: 32px;
  color: ${theme.colors.sub};
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 30rem;
  padding: 15px;
  border: none;
  outline: none;
  border-bottom: solid ${theme.colors.main};
  font-weight: bold;
  font-size: 12px;
  margin-top: 15px;

  ${theme.media.laptop} {
    width: 60%;
  }
`;

export const Error = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 30rem;

  span {
    margin-left: 15px;
    margin-top: 10px;
    font-size: 13px;
    color: red;
  }

  ${theme.media.laptop} {
    width: 60%;
  }
`;
