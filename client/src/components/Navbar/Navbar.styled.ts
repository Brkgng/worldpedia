import styled from 'styled-components';
// Route
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  display: flex;
  width: fit-content;
  align-items: center;
  text-decoration: none;
  color: var(--black);
  font-size: min(max(2vw, 0.8rem), 1.2rem);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  margin-top: 3vh;

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
