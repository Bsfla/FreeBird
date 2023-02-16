import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.div`
  width: 500px;
  overflow: hidden;
`;

export const SlideContainer = styled.div<{ currentSlide: number }>`
  display: flex;
  transition: all 0.5s ease-in-out;
  transform: ${(props) => `translateX(-${props.currentSlide}00%)`};
  margin: 0 auto;
`;

export const Slide = styled.div`
  min-width: 500px;
  height: 400px;
  display: flex;
  justify-content: center;

  img {
    height: 100%;
  }
`;
