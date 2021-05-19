require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  routes = require("./services/routes/index"),
  app = express(),
  PORT = process.env.APP_PORT;


const CLIENT = process.env;
let corsOptions;
if (process.env.NODE_ENV === "production") {
  console.log("production")
  corsOptions = {
    origin: "https://test.laddboxkillarna.se",
    optionsSuccessStatus: 200,
  };
} else {
  console.log("develop")

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
