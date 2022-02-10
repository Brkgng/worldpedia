import styled from 'styled-components';
import section2Bg from '../../../assets/section2Bg.svg';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 25vh;
  margin-bottom: 50px;
  overflow-y: none;

  // Laptop
  @media screen and (max-width: 1440px) {
    margin-top: 10vh;
  }

  h1 {
    position: absolute;
    top: 12vh;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 3.1rem;

    // Laptop
    @media screen and (max-width: 1440px) {
      top: 16vh;
      font-size: 3rem;
    }

    @media screen and (max-width: 1176px) {
      font-size: var(--fontBigger);
    }

    @media screen and (max-width: 980px) {
      font-size: 2.3rem;
    }

    // Mobile
    @media screen and (max-width: 500px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 450px) {
      top: 15vh;
      font-size: 1.6rem;
    }
  }
`;

export const BackgroundImg = styled.div`
  background: url(${section2Bg}) no-repeat;
  background-size: 100% 100%;
  height: 890px;
  margin: 0 -6%;
  z-index: -2;
  overflow-y: none;

  @media screen and (max-width: 1440px) {
    height: 850px;
  }

  @media screen and (max-width: 980px) {
    margin: 0 -5%;
  }

  // Mobile
  @media screen and (max-width: 450px) {
    margin: 0 -2%;
    height: 750px;
  }
`;

export const Maps = styled.div`
  position: absolute;
  top: 22vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  justify-content: space-around;

  a {
    display: flex;
    flex: 0 0 31%;
    justify-content: center;
    transition: transform 0.35s;

    &:hover {
      transform: scale(1.2);
    }

    &:last-child {
      margin-right: 16.5%;
    }

    &:nth-last-child(2) {
      margin-left: 16.5%;
    }

    @media screen and (max-width: 980px) {
      &:hover {
        transform: none;
      }
    }
  }

  // Laptop
  @media screen and (max-width: 1440px) {
    top: 30vh;
    row-gap: 50px;
  }

  @media screen and (max-width: 980px) {
    top: 33vh;
  }

  // Mobile
  @media screen and (max-width: 500px) {
    row-gap: 20px;
  }

  @media screen and (max-width: 450px) {
    top: 27vh;
  }
`;

export const Map = styled.img`
  max-height: 250px;

  // Laptop
  @media screen and (max-width: 1440px) {
    height: 230px;
  }

  @media screen and (max-width: 1176px) {
    height: 200px;
    margin: 0 !important;
  }

  // Mobile
  @media screen and (max-width: 500px) {
    flex: 0 0 50%;
    height: 160px;
  }

  @media screen and (max-width: 450px) {
    height: 150px;
  }
`;
