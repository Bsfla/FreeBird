import React from 'react';
import { StyledButton } from './style';

interface Props {
  name: string;
  disabled?: boolean;
}

const Button = ({ name, disabled }: Props) => {
  return <StyledButton disabled={disabled}>{name}</StyledButton>;
};

export default Button;
