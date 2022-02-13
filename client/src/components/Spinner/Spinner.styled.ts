import styled from 'styled-components';
import { Props } from './Spinner';

export const SpinnerStyled = styled.div<Props>`
  height: ${(props) => props.size || 50}px;
  width: ${(props) => props.size || 50}px;
  border: 5px solid ${(props) => props.bgColor || 'lightgray'};
  border-top: 5px solid ${(props) => props.spinColor || 'gray'};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
