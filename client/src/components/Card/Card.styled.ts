import styled from 'styled-components'
// Route
import { Link } from 'react-router-dom'

export const CardStyled = styled.div`
  position: relative;
  width: 250px;
  padding: 5px 10px 10px 10px;
  background-color: var(--white);
  outline: 2px solid var(--black);
  border-radius: 5px;
  -moz-outline-radius: 5px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    outline-color: var(--darkblue);
    outline-width: 3px;
  }

  // Mobile
  @media screen and (max-width: 708px) {
    width: 200px;
  }

  @media screen and (max-width: 500px) {
    width: 160px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  font-size: min(max(2vw, 0.9rem), 1rem);
  margin-bottom: 12px;
  border-bottom: 2px solid var(--black);

  // Flag
  img {
    width: 50px;
    height: 35px;
    border-radius: 5px;
    margin-left: 5px;

    @media screen and (max-width: 708px) {
      width: 40px;
      height: 30px;
    }
  }

  @media screen and (max-width: 500px) {
    padding-bottom: 7px;
    margin-bottom: 7px;
    font-size: 0.8rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
  font-size: min(max(1.8vw, 0.8rem), 1rem);

  @media screen and (max-width: 611px) {
    row-gap: 5px;
  }
`

export const Icon = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: 10px;
  right: 10px;

  @media screen and (max-width: 611px) {
    width: 30px;
    height: 30px;
    bottom: 5px;
    right: 5px;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
