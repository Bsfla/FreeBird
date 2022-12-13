import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 36rem;
  min-height: 20rem;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
  position: relative;

  button {
    margin: 0 auto;
    font-size: 15px;
  }

  span {
    color: ${theme.colors.sub};
    font-weight: bold;
    margin-bottom: 20px;
  }

  .image_upload {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin-bottom: 20px;

    input {
      display: none;
    }

    svg {
      margin-top: 15px;
      position: relative;
      right: 10px;
      cursor: pointer;
    }
  }
`;

export const TextForm = styled.textarea`
  height: 10rem;
  resize: none;
  border: solid ${theme.colors.gray2};
  border-radius: 10px;
  padding: 15px;
  font-weight: bold;

  &:focus {
    outline: solid ${theme.colors.sub};
    border: none;
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;


