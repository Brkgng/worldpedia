import React from 'react';
// Styles
import { Icon } from './NotFound.styled';
// Icon
import notfound from '../../assets/404.png';

const NotFound: React.FC = () => {
  return (
    <>
      <Icon src={notfound} />
    </>
  );
};

export default NotFound;
