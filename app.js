//require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  routes = require("./services/routes/index"),
  app = express();

const CLIENT = process.env;
let corsOptions;
if (process.env.NODE_ENV === "production") {
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

//const PORT = process.env.PORT || 8000;
const PORT = 8000;
app.listen(PORT);

console.log(`ON: ${PORT}`);
