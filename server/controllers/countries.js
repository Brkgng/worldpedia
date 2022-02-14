import axios from "axios";

export const getAllCountries = (req, res) => {
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((countries) => res.status(200).send(countries.data))
    .catch(() => res.status(404));
};

export const getCountry = (req, res) => {
  const code = req.params.code;
  axios
    .get(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((country) => res.status(200).send(country.data))
    .catch(() => res.status(404).send());
};

export const getCountriesByCurrency = (req, res) => {
  const currency = req.params.currency;
  axios
    .get(`https://restcountries.com/v3.1/currency/${currency}`)
    .then((countries) => res.status(200).send(countries.data))
    .catch(() => res.status(404));
};
