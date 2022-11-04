const express = require("express");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome home");
});

app.get("/users", (req, res) => {
  res.send("Users");
});

app.listen(port, () => {
  console.log("Listening");
});
