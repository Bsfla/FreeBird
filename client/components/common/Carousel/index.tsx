import React, { useState, ReactNode, cloneElement } from 'react';
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

interface Props {
  children: ReactNode;
}

const Carousel = ({ children }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchPostion, setTouchposition] = useState<number | null>(null);
  const [coordinate, setCoordinate] = useState(0);
  const TOTAL_SLIDE = React.Children.count(children);

  const moveNextSlide = () => {
    if (currentSlide == TOTAL_SLIDE - 1) {
      setCurrentSlide(TOTAL_SLIDE - 1);
      return;
    }

    setCurrentSlide((prev) => prev + 1);
  };

  const movePrevSlide = () => {
    if (currentSlide == 0) {
      setCurrentSlide(0);
      return;
    }

    setCurrentSlide((prev) => prev - 1);
  };

  const handleNextSlide = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();

    moveNextSlide();
  };

  const handlePrevSlide = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();

    movePrevSlide();
  };

  const handleMoveSelectSlide =
    (slideLocation: number) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();

      setCurrentSlide(slideLocation);
    };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const touchDown = e.touches[0].clientX;

    setTouchposition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const touchDown = touchPostion;

    if (touchDown === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 3) moveNextSlide();
    else if (diff < -3) movePrevSlide();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setCoordinate(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (coordinate) {
      if (coordinate > e.clientX) moveNextSlide();
      else if (coordinate < e.clientX) movePrevSlide();
    }
  };

  return (
    <Wrapper>
      <SlideContainer
        currentSlide={currentSlide}
        onClick={(e) => e.stopPropagation()}>
        {React.Children.map(children, (child, index) => {
          return (
            <Slide
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onMouseUp={handleMouseMove}
              onMouseDown={handleMouseDown}>
              {cloneElement(child as any)}
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
          {Array.from({ length: TOTAL_SLIDE }, (el, index) => index).map(
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
