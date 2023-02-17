import React, { ReactNode, cloneElement } from 'react';
import {
  Wrapper,
  SlideContainer,
  Slide,
  SlideButton,
  SlideDot,
  DotWrapper,
} from './style';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import theme from 'styles/theme';
import { useCarousel } from '@hooks/common';

interface Props {
  children: ReactNode;
}

const Carousel = ({ children }: Props) => {
  const {
    currentSlide,
    slideLength,
    handleNextSlide,
    handlePrevSlide,
    handleTouchStart,
    handleTouchMove,
    handleMoveSelectSlide,
  } = useCarousel(children);

  return (
    <Wrapper>
      <SlideContainer
        currentSlide={currentSlide}
        onClick={(e) => e.stopPropagation()}>
        {React.Children.map(children, (child, index) => {
          return (
            <Slide
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}>
              {child}
            </Slide>
          );
        })}
      </SlideContainer>
      <SlideButton>
        <BsFillArrowLeftSquareFill
          size={30}
          color={theme.colors.white}
          onClick={handlePrevSlide}
        />
        <DotWrapper>
          {Array.from({ length: slideLength }, (el, index) => index).map(
            (el) => (
              <SlideDot
                key={el}
                currentSlide={currentSlide}
                slideLocation={el}
                onClick={handleMoveSelectSlide(el)}
              />
            )
          )}
        </DotWrapper>
        <BsFillArrowRightSquareFill
          size={30}
          color={theme.colors.white}
          onClick={handleNextSlide}
        />
      </SlideButton>
    </Wrapper>
  );
};

export default Carousel;
