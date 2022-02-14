import React from 'react';
// Style
import { CardStyled, NavLink, Header, Content, Icon } from './Card.styled';
// Icon
import clickIcon from '../../assets/click.png';
// Interface
import { ICountry } from '../../interfaces/country';

interface Props {
  country: ICountry;
}

const Card: React.FC<Props> = ({ country }) => {
  return (
    <NavLink to={`${country.cioc}`}>
      <CardStyled>
        <Header>
          <h2>{country.name.common}</h2>
          <img src={country.flags.png} alt="Flag" />
        </Header>
        <Content>
          <h3>Kıta: {country.continents}</h3>
          <h3>Başkent: {country.capital}</h3>
          <h3>
            Ülke Kodu:{' '}
            {country.idd && country.idd.suffixes && country.idd.root + country.idd.suffixes[0]}
          </h3>
          <h3>Para birimi: {country.currencies && Object.keys(country.currencies)[0]}</h3>
          <h3>Nüfus: {country.population}</h3>
          <h3>Alan: {country.area} km&#178;</h3>
        </Content>
        <Icon src={clickIcon} alt="Icon" />
      </CardStyled>
    </NavLink>
  );
};

export default Card;
