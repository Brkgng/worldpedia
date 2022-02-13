import React from 'react';
// Style
import { SelectBarStyled } from './SelectBar.styled';

export interface Props {
  defaultValue?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  width?: string;
  height?: string;
  borderColor?: string;
  borderRadius?: number;
  fontSize?: string;
}

const SelectBar: React.FC<Props> = ({
  children,
  defaultValue,
  value,
  onChange,
  width,
  height,
  borderColor,
  borderRadius,
  fontSize
}) => {
  return (
    <SelectBarStyled
      defaultValue={defaultValue}
      value={value}
      onChange={(e) => onChange(e)}
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
