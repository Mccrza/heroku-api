process.title = "index.js";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/routes.js")(app, fs);

const importData = require("./data/user.json");
let port = process.env.PORT || 3334;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/apiData", (req, res) => {
  res.send(importData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${3334}`);
});
