import React from 'react'
// Style
import { Wrapper, SearchBarStyled, Icon } from './SearchBar.styled'
// Icon
import searchIcon from '../../assets/search.png'

export interface Props {
  value?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  width?: string
  height?: string
  borderColor?: string
  borderRadius?: number
  fontSize?: string
}

const SearchBar: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  width,
  height,
  borderColor,
  borderRadius,
  fontSize
}) => {
  return (
    <Wrapper>
      <SearchBarStyled
        placeholder={placeholder}
        width={width}
        height={height}
        borderColor={borderColor}
        borderRadius={borderRadius}
        fontSize={fontSize}
        value={value}
        onChange={onChange}
      />
      <Icon src={searchIcon} alt="" />
    </Wrapper>
  )
}

export default SearchBar
