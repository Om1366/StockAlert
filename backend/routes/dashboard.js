const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  try {
    db.query(
      `
      SELECT
      (SELECT COUNT(*) FROM stocks) AS totalStocks,
      (SELECT COUNT(*) FROM alerts) AS totalAlerts
      `,
      (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        res.json(results[0]);
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
