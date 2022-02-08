import styled from 'styled-components';
import { Props } from './Circle';

const CircleStyled = styled.span<Props>`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  border-radius: 50%;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  background-color: ${(props) => props.color || 'var(--lightblue)'};
  z-index: -1;
`;

export default CircleStyled;
