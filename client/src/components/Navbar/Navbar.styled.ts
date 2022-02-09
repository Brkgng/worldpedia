import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3vh;

  h1 {
    margin-left: min(20px, 1vw);
  }

  @media screen and (max-width: 500px) {
    h1 {
      margin-left: 10px;
    }
  }
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;

  // Mobile
  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;
