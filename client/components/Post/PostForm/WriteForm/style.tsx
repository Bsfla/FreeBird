import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrraper = styled.div`
  display: flex;
  flex-direction: column;

  .image_upload {
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
