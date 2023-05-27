import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 25px;
  height: max(60vh, 300px);
  margin-bottom: 80px;
  margin-top: 10vh;
`

export const Content = styled.div`
  position: relative;
  width: min(45%, 600px);
  background-color: var(--white);
  padding: 10px 20px 30px 20px;
  border-radius: 5px;
  border: 1px solid var(--black);

  // Large Screens
  @media screen and (min-width: 1400px) {
    transform: scale(1.1);
  }

  // Tablet
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`
