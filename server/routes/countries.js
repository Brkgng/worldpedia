import express from "express";
import {
  getAllCountries,
  getCountriesByCurrency,
  getCountriesByRegion,
} from "../controllers/countries.js";

const router = express.Router();

router.get("/", getAllCountries);
router.get("/:region", getCountriesByRegion);
router.get("/currency/:currency", getCountriesByCurrency);

export default router;
