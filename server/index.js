const express = require("express");
const cors = require("cors");

// Middleware
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
