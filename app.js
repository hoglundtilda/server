require('dotenv').config();
const express = require('express'),
  cors = require('cors'),
  routes = require('./services/routes/index'),
  app = express(),
  PORT = process.env.APP_PORT || 5050,
  CLIENT = process.env,
 // TEST = 'http://localhost:xxx/'
  corsOptions = {
    origin: CLIENT,
    optionsSuccessStatus: 200,
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(PORT);

console.log(`ON: ${PORT}`);
