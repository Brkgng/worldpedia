import express from "express";
import {
  getAllCountries,
  getCountry,
  getCountriesByCurrency,
} from "../controllers/countries.js";

const countriesRouter = express.Router();

countriesRouter.get("/", getAllCountries);
countriesRouter.get("/:code", getCountry);
countriesRouter.get("/currency/:currency", getCountriesByCurrency);

export default countriesRouter;
