import React from 'react';
// Styles
import { ButtonStyled } from './Button.styled';

export interface Props {
  primary: boolean;
  width?: number;
  height?: number;
  bgColor?: string;
}

const Button: React.FC<Props> = ({ children, primary, width, height, bgColor }) => {
  return (
    <ButtonStyled primary={primary} width={width} height={height} bgColor={bgColor}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
