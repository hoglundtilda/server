require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  routes = require("./routes/routes"),
  app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT);
console.log(`ON: ${port}`);
