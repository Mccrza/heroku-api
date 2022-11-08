process.title = "index.js";

const express = require("express");
const app = express();
const importData = require("./user.json");
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
