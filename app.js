//require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  routes = require("./services/routes/index"),
  app = express();

  const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

//const PORT = process.env.PORT || 8000;
const PORT = 8000;
app.listen(PORT);
console.log(`ON: ${PORT}`);
