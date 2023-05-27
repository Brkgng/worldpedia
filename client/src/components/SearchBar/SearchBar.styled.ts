import styled from 'styled-components'
// Props
import { Props } from './SearchBar'

export const SearchBarStyled = styled.input<Props>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  font-size: ${({ fontSize }) => fontSize || 'var(--fontBig)'};
  padding: 5px 0 5px 40px;
  border: 1px solid ${({ borderColor }) => borderColor || 'gray'};
  border-radius: ${({ borderRadius }) => borderRadius || 5}px;
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  width: 22px;
  height: 22px;
`
