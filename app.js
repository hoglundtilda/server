require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  routes = require("./services/routes/index"),
  app = express(),
  PORT = process.env.APP_PORT,
  CLIENT = process.env,
  corsOptions = {
  //origin: 'https://www.test.laddboxkillarna.se',
  origin: CLIENT,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(PORT);

console.log(`ON: ${PORT}`);
