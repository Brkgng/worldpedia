import React from 'react'
// Style
import { SpinnerStyled } from './Spinner.styled'

export interface Props {
  size?: number
  bgColor?: string
  spinColor?: string
}

const Spinner: React.FC<Props> = ({ size, bgColor, spinColor }) => {
  return <SpinnerStyled size={size} bgColor={bgColor} spinColor={spinColor} />
}

export default Spinner
