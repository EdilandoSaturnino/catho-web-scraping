const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

function configureExpress(app) {
  app.use(bodyParser.json());

  app.use(cors());

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("ocorreu um erro");
  });
}

module.exports = configureExpress;
