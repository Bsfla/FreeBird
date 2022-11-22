import React from 'react';
import { StyledButton } from './style';

interface Props {
  name: string;
}

const Button = ({ name }: Props) => {
  return <StyledButton>{name}</StyledButton>;
};

export default Button;
