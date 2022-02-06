import axios from "axios";

export const getAllCountries = (req, res) => {
  console.log(req.baseUrl);
  axios
    .get("https://restcountries.com/v3.1/subregion/central")
    .then((countries) => res.status(200).send(countries.data))
    .catch(() => res.status(404).send("Countries not found."));
};

export const getCountriesByRegion = (req, res) => {
  const region = req.params.region;
  axios
    .get(`https://restcountries.com/v3.1/region/${region}`)
    .then((countries) => res.status(200).send(countries.data))
    .catch(() => res.status(404).send("Countries not found."));
};

export const getCountriesByCurrency = (req, res) => {
  const currency = req.params.currency;
  axios
    .get(`https://restcountries.com/v3.1/currency/${currency}`)
    .then((countries) => res.status(200).send(countries.data))
    .catch(() => res.status(404).send("Countries not found."));
};
