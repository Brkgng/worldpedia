import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 9px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 25px;
`;

export const Option = styled.button<{ selected: string }>`
  flex-grow: 1;
  padding: 5px 3px;
  font-size: var(--fontMed);
  background-color: ${({ selected }) =>
    selected ? (selected === 'correct' ? '#85f06e' : '#ff1717') : '#f2f2f2'};
  border-radius: 5px;
  border: 1px solid gray;
  text-align: start;
  cursor: pointer;

  &:hover {
    background-color: ${({ selected }) => !selected && '#edfffc'};
  }

  &:disabled {
    color: var(--black);
    opacity: ${({ selected }) => (selected === 'correct' ? 1 : 0.7)};
  }
`;

export const QuestionInfo = styled.p`
  position: absolute;
  top: 10px;
  left: 20px;
`;

export const Button = styled.button`
  width: 150px;
  min-height: 40px;
  font-weight: bold;
  font-size: 1rem;
  background-color: var(--white);
  border-radius: 5px;
  border: 1px solid var(--black);
  cursor: pointer;

  /* Large Screens */
  @media screen and (min-width: 1400px) {
    margin-top: 20px;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;
