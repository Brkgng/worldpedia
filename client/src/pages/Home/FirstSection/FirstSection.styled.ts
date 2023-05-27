import styled from 'styled-components'
import world from '../../../assets/world.png'
import circle3d from '../../../assets/circle3d.png'

export const Content = styled.div`
  max-width: 600px;
  margin-top: 15vh;

  @media screen and (max-width: 1440px) {
    margin-top: 9vh;
  }

  @media screen and (max-width: 1176px) {
    margin-top: 6vh;
  }
`

export const Text = styled.div`
  margin-bottom: 30px;

  h1 {
    font-family: 'Quicksand', sans-serif;
    font-size: var(--fontSuperBig);
    margin-bottom: 20px;
  }

  h3 {
    font-family: 'Quicksand', sans-serif;
    font-size: var(--fontBig);
    font-weight: 500;
    margin-bottom: 9px;
  }

  @media screen and (max-width: 980px) {
    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: var(--fontMed);
    }
  }

  // Mobile
  @media screen and (max-width: 500px) {
    h1 {
      font-size: var(--fontBigger);
      line-height: 3rem;
    }

    h3 {
      font-size: var(--fontMed);
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 550px;
`

export const Circle3D = styled.div`
  background: url(${circle3d}) no-repeat;
  background-size: contain;
  width: 265px;
  height: 248px;
  position: absolute;
  top: 0;
  right: 0;

  // Laptop
  @media screen and (max-width: 1440px) {
    width: 200px;
    heigth: 200px;
  }

  // Tablet
  @media screen and (max-width: 1176px) {
    width: 150px;
    height: 150px;
  }

  // Mobile
  @media screen and (max-width: 450px) {
    width: 100px;
    height: 100px;
  }
`

export const World = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  background: url(${world}) no-repeat right 30% top 40%,
    radial-gradient(35% 60% at right 33% top 40%, #0066ff 0%, rgba(255, 255, 255, 0) 100%), #ffffff;

  @media screen and (max-width: 1440px) {
    background: url(${world}) no-repeat right 20% top 40%,
      radial-gradient(35% 60% at right 26% top 42%, #0066ff 0%, rgba(255, 255, 255, 0) 100%),
      #ffffff;
  }

  @media screen and (max-width: 1176px) {
    background: url(${world}) no-repeat right 10% top 35%,
      radial-gradient(30% 40% at right 20.5% top 39%, #0066ff 0%, rgba(255, 255, 255, 0) 100%),
      #ffffff;
    background-size: 340px, cover;
  }

  @media screen and (max-width: 980px) {
    display: none;
  }
`
