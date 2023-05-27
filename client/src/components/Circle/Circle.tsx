import React from 'react'
// Style
import CircleStyled from './Circle.styled'

export interface Props {
  size: number
  top?: string
  right?: string
  bottom?: string
  left?: string
  color?: string
}

const Circle: React.FC<Props> = ({ size, top, right, bottom, left, color }) => {
  return (
    <CircleStyled size={size} top={top} right={right} bottom={bottom} left={left} color={color} />
  )
}

export default Circle
