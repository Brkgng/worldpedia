import React from 'react';
// Styles
import { ButtonStyled } from './Button.styled';

export interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary: boolean;
  width?: number;
  height?: number;
  bgColor?: string;
}

const Button: React.FC<Props> = ({ children, onClick, primary, width, height, bgColor }) => {
  return (
    <ButtonStyled
      onClick={onClick}
      primary={primary}
      width={width}
      height={height}
      bgColor={bgColor}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
