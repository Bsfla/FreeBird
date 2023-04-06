import styled from '@emotion/styled';
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

export const SlideButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 27px;

  svg {
    &:active {
      background-color: black;
    }
  }
`;

export const DotWrapper = styled.div`
  display: flex;
  gap: 13px;
`;

export const SlideDot = styled.div<{
  currentSlide: number;
  slideLocation: number;
}>`
  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: ${(props) => {
    const { currentSlide, slideLocation } = props;

    if (currentSlide === slideLocation) return 'black';
    return theme.colors.white;
  }};
`;
