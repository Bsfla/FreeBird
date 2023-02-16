import { createImagePath } from '@lib/utils';
import React, {
  useState,
  useRef,
  ReactNode,
  cloneElement,
  useEffect,
} from 'react';
import { Wrapper, SlideContainer, Slide } from './style';

interface Props {
  children: ReactNode;
}

const Carousel = ({ children }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handelNextItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    setCurrentSlide((prev) => prev + 1);
  };

  console.log(23);

  return (
    <Wrapper>
      <SlideContainer currentSlide={currentSlide}>
        {React.Children.map(children, (child, index) => {
          return <Slide>{React.cloneElement(child as any)}</Slide>;
        })}
      </SlideContainer>
      <button onClick={handelNextItem}>클릭</button>
    </Wrapper>
  );
};

export default Carousel;
