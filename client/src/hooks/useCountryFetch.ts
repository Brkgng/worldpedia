import { useState, useEffect } from 'react';
// API
import * as api from '../api/apiCountries';
// Interface
import { ICountry } from '../interfaces/country';

export const useCountryFetch = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCountries = async () => {
    try {
      setLoading(true);

      // Check if local storage has countries
      const countriesStorage = localStorage.getItem('countries');
      if (countriesStorage) {
        setCountries(JSON.parse(countriesStorage));
      } else {
        const countriesAPI = await api.fetchCountries();
        setCountries(countriesAPI);
        localStorage.setItem('countries', JSON.stringify(countriesAPI));
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  // Initial render
  useEffect(() => {
    fetchCountries();
  }, []);

  return { countries, loading };
};
