import express from "express";
import {
  getAllCountries,
  getCountry,
  getCountriesByCurrency,
} from "../controllers/countries.js";

const router = express.Router();

router.get("/", getAllCountries);
router.get("/:code", getCountry);
router.get("/currency/:currency", getCountriesByCurrency);

export default router;
