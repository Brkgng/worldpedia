import styled from 'styled-components';
// Props
import { Props } from './SelectBar';

export const SelectBarStyled = styled.select<Props>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  font-size: ${({ fontSize }) => fontSize || 'var(--fontBig)'};
  padding: 5px 10px;
  border: 1px solid ${({ borderColor }) => borderColor || 'gray'};
  border-radius: ${({ borderRadius }) => borderRadius || 5}px;
`;
