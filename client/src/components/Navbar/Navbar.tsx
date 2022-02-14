import React from 'react';
// Components
import Button from '../Button/Button';
// Styles
import { NavLink, Wrapper, Logo } from './Navbar.styled';
// Image
import logo from '../../assets/logo.png';

export interface Props {
  bgColor?: string;
  shadow?: boolean;
  buttonActive?: boolean;
  buttonText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Navbar: React.FC<Props> = ({
  bgColor,
  shadow,
  buttonActive = false,
  buttonText,
  onClick
}) => {
  return (
    <Wrapper bgColor={bgColor} shadow={shadow}>
      <NavLink to={'/'}>
        <Logo src={logo} alt="Logo" />
        <h1>Worldpedia</h1>
      </NavLink>
      {buttonActive && (
        <Button onClick={onClick} primary bgColor="#5CB1FF">
          {buttonText}
        </Button>
      )}
    </Wrapper>
  );
};

export default Navbar;
