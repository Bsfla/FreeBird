import styled from 'styled-components';
import theme from 'styles/theme';

export const ModalTitle = styled.div`
  width: 100%;
  height: 3rem;
  border-bottom: solid ${theme.colors.gray2};
  display: flex;
  align-items: center;

  span {
    color: ${theme.colors.sub};
    margin-left: 20px;
    font-weight: bold;
  }
`;

export const ModalBodyLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  div:nth-of-type(1) {
    width: 8rem;
    height: 8rem;
  }

  input {
    display: none;
  }
`;

export const ModalEditContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  label {
    margin-top: 10px;
    font-size: 11px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: solid ${theme.colors.main};
  border-radius: 20px;
  font-size: 8px;
  margin-top: 5px;

  &:focus {
    outline: solid ${theme.colors.sub};
    border: none;
  }

  ${theme.media.laptop} {
    width: 60%;
  }
`;

export const Button = styled.button`
  width: 10rem;
  height: 30px;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.white};
  font-size: 13px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 15px;

  &:active {
    background-color: ${theme.colors.sub2};
  }
`;

export const ImageEditButton = styled.button`
  background-color: red;
  color: ${theme.colors.white};
  font-size: 8px;
  width: 5rem;
  border: none;
  padding: 8px;
  border-radius: 20px;
`;
