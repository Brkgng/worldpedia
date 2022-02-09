import React from 'react';
// Styles
import { Wrapper, Logo } from './Navbar.styled';
// Image
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <h1>Worldpedia</h1>
    </Wrapper>
  );
};

export default Navbar;
