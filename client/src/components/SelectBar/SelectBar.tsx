import React from 'react';
// Style
import { SelectBarStyled } from './SelectBar.styled';

export interface Props {
  defaultValue?: string;
  width?: string;
  height?: string;
  borderColor?: string;
  borderRadius?: number;
  fontSize?: string;
}

const SelectBar: React.FC<Props> = ({
  children,
  defaultValue,
  width,
  height,
  borderColor,
  borderRadius,
  fontSize
}) => {
  return (
    <SelectBarStyled
      defaultValue={defaultValue}
      width={width}
      height={height}
      borderColor={borderColor}
      borderRadius={borderRadius}
      fontSize={fontSize}
    >
      {children}
    </SelectBarStyled>
  );
};

export default SelectBar;
