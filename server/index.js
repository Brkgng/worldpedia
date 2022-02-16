import express from "express";
import cors from "cors";
import countriesRouter from "./routes/countries.js";
import questionsRouter from "./routes/questions.js";

// Middleware
const app = express();
app.use(express.json());
app.use(cors());
app.use("/countries", countriesRouter);
app.use("/questions", questionsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
