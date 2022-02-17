import React, { useState } from 'react';
// Components
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SelectBar from '../../components/SelectBar/SelectBar';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
// Hooks
import { useCountryFetch } from '../../hooks/useCountryFetch';
// Style
import {
  Container,
  BarsContainer,
  CardsContainer,
  UpdateBackgroundColor
} from './Countries.styled';
// Get state of Link from "SecondSection.tsx"
import { useLocation, useNavigate } from 'react-router-dom';

interface State {
  region: string;
}

const Countries: React.FC = () => {
  const { countries, loading } = useCountryFetch();
  const location = useLocation();
  const state = location.state as State;
  const [selected, setSelected] = useState(state ? state.region : 'All');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function filterCountriesByRegion() {
    if (selected === 'All') return countries;

    const filteredByRegion = countries.filter((country) => {
      return country.region === selected;
    });

    return filteredByRegion;
  }

  function getCountries() {
    const filteredCountries = filterCountriesByRegion().filter((country) => {
      return country.name.common.toLowerCase().startsWith(search.toLowerCase());
    });
    return filteredCountries;
  }

  return (
    <>
      <Navbar buttonActive buttonText="Teste başla" onClick={() => navigate('/quiz')} />
      <Container>
        <h1>{getCountries().length}</h1>
        <BarsContainer>
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Ülke Ara"
            width="100%"
          />
          <SelectBar
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            width="max(20%, 220px)"
            fontSize="min(max(2vw,1rem), 1.5rem)"
          >
            <option value="All">Tüm ülkeler</option>
            <option value="Europe">Avrupa</option>
            <option value="Americas">Amerika</option>
            <option value="Asia">Asya</option>
            <option value="Africa">Afrika</option>
            <option value="Oceania">Avustralya</option>
          </SelectBar>
        </BarsContainer>
        <CardsContainer>
          {loading ? (
            // Show spinner while loading
            <Spinner spinColor="#5cb1ff" />
          ) : (
            getCountries().map((country, key) => {
              return <Card key={key} country={country} />;
            })
          )}
        </CardsContainer>
        <UpdateBackgroundColor />
      </Container>
    </>
  );
};

export default Countries;
