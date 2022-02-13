import React from 'react';
// Components
import Button from '../Button/Button';
// Styles
import { NavLink, Wrapper, Logo } from './Navbar.styled';
// Image
import logo from '../../assets/logo.png';

interface Props {
  buttonActive?: boolean;
  buttonText?: string;
}

const Navbar: React.FC<Props> = ({ buttonActive = false, buttonText }) => {
  return (
    <Wrapper>
      <NavLink to={'/'}>
        <Logo src={logo} alt="Logo" />
        <h1>Worldpedia</h1>
      </NavLink>
      {buttonActive && (
        <Button primary bgColor="#5CB1FF">
          {buttonText}
        </Button>
      )}
    </Wrapper>
  );
};

export default Navbar;
