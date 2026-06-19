const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("ROOT HIT");
  res.send("WORKING");
});

app.listen(3001, () => {
  console.log("TEST SERVER RUNNING");
});
