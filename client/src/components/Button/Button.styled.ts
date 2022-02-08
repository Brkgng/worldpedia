import styled, { css } from 'styled-components';
import { Props } from './Button';

export const ButtonStyled = styled.button<Props>`
  border-radius: 5px;
  font-weight: bold;
  font-size: var(--fontMed);
  cursor: pointer;
  height: ${({ height }) => height || 50}px;
  width: ${({ width }) => width || 200}px;
  ${({ primary, bgColor }) =>
    primary
      ? css`
          color: #fff;
          background-color: ${bgColor || 'var(--orange)'};
          border: none;
        `
      : css`
          color: ${bgColor || 'var(--orange)'};
          background-color: #fff;
          border: 2px solid ${bgColor || 'var(--orange)'};
        `}
`;
