require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  routes = require("./services/routes/index"),
  app = express(),
  PORT = process.env.APP_PORT;

  console.log(process.env.APP_PORT)

const CLIENT = process.env;
let corsOptions;
if (process.env.NODE_ENV === "production") {
  console.log("here")
  corsOptions = {
    origin: "https://www.test.laddboxkillarna.se",
    optionsSuccessStatus: 200,
  };
} else {
  corsOptions = {
    origin: CLIENT,
    optionsSuccessStatus: 200, // For legacy browser support
  };
}

//console.log(process.env);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(PORT);

console.log(`ON: ${PORT}`);
