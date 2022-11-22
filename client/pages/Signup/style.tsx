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
  height: 30rem;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  animation: ${SlideUp} 0.5s;
  margin-bottom: 50px;

  span {
    color: ${theme.colors.sub};
    font-weight: bold;
    margin-bottom: 25px;
  }

  ${theme.media.laptop} {
    width: 80%;
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
  border: solid ${theme.colors.main};
  border-radius: 20px;
  font-weight: bold;
  font-size: 15px;
  margin-top: 15px;

  &:focus {
    outline: solid ${theme.colors.sub};
    border: none;
  }

  ${theme.media.laptop} {
    width: 60%;
  }
`;
