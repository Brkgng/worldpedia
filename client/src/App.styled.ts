import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  // Laptop
  @media screen and (max-width: 1440px) {
    width: 85%;
  }

  // Tablet
  @media screen and (max-width: 900px) {
    width: 90%;
  }

  // Mobile
  @media screen and (max-width: 450px) {
    width: 95%;
  }
`
