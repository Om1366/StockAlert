const express = require("express");
const router = express.Router();
console.log("stocks.js loaded");
const db = require("../db");

router.get("/", (req, res) => {
  console.log("Stocks API called");

  db.query("SELECT * FROM stocks", (err, results) => {
    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).json({
        error: "Database Error"
      });
    }

    console.log("Query completed");

    res.json(results);
  });
});

module.exports = router;
