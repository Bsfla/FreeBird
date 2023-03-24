import React, { useEffect } from 'react';
import { useAlert } from '@hooks/common';
import { Wrapper } from './style';

const Alert = () => {
  const { isOpen, message, hideAlert } = useAlert();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        hideAlert();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Wrapper isOpen={isOpen}>
      <span>{message}</span>
    </Wrapper>
  );
};

export default Alert;
