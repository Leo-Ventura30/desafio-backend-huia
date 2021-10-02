const express = require("express");
const app = express();

app.disable("x-powered-by");

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./app/routes/"));

module.exports = app;
