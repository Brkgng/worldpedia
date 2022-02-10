import React from 'react';
// Style
import { SearchBarStyled } from './SearchBar.styled';

export interface Props {
  value?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  borderColor?: string;
  borderRadius?: number;
  fontSize?: string;
}

const SearchBar: React.FC<Props> = ({
  value,
  placeholder,
  width,
  height,
  borderColor,
  borderRadius,
  fontSize
}) => {
  return (
    <SearchBarStyled
      placeholder={placeholder}
      width={width}
      height={height}
      borderColor={borderColor}
      borderRadius={borderRadius}
      fontSize={fontSize}
      value={value}
    />
  );
};

export default SearchBar;
