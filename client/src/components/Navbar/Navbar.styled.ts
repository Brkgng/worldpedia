import styled, { css } from 'styled-components'
import { Props } from './Navbar'
// Route
import { Link } from 'react-router-dom'

export const NavLink = styled(Link)`
  display: flex;
  width: fit-content;
  align-items: center;
  text-decoration: none;
  color: var(--black);
  font-size: min(max(2vw, 0.8rem), 1.2rem);
`

export const Wrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  margin-top: 3vh;
  border-radius: 9px;
  background-color: ${(props) => props.bgColor || 'transparent'};
  ${(props) =>
    props.shadow &&
    css`
      box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.15);
      padding: 10px 15px;
    `}

  h1 {
    margin-left: min(20px, 1vw);
  }

  @media screen and (max-width: 500px) {
    h1 {
      margin-left: 10px;
    }
  }

  button {
    margin: auto 0;
  }
`

export const Logo = styled.img`
  width: 70px;
  height: 70px;

  // Mobile
  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`
