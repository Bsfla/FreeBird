import React from 'react';
import { StyledButton } from './style';

interface Props {
  name: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ name, disabled, onClick }: Props) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {name}
    </StyledButton>
  );
};

export default Button;
