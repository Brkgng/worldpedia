import axios from 'axios';

const apiEndpoint = 'http://localhost:4000/countries';

export const fetchCountries = async () => {
  return await (
    await axios(apiEndpoint)
  ).data;
};
