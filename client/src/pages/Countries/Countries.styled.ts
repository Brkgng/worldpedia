import styled, { createGlobalStyle } from 'styled-components';

export const UpdateBackgroundColor = createGlobalStyle`
  html { background-color: #FFE5CE; }
`;

export const Container = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

export const BarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 5%;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  column-gap: 45px;
  row-gap: 50px;
  margin-top: 7vh;

  // Mobile
  @media screen and (max-width: 611px) {
    column-gap: 25px;
    row-gap: 30px;
  }

  @media screen and (max-width: 500px) {
    column-gap: 10px;
  }

  @media screen and (max-width: 350px) {
    justify-content: center;
  }
`;
