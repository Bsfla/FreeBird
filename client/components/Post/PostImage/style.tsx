import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 20rem;
  background-color: black;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  border-radius: 20px;

  .image_content {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

export const ImageSection = styled.div`
  width: 50%;
  height: 100%;

  .first_image {
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .center_image {
    width: 100%;
    height: 100%;
  }
  .second_image {
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
