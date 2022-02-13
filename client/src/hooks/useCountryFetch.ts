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

      const countries = await api.fetchCountries();
      setCountries(countries);
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
