const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      stock_name: "Reliance",
      stock_price: 1450
    },
    {
      id: 2,
      stock_name: "TCS",
      stock_price: 3800
    },
    {
      id: 3,
      stock_name: "Infosys",
      stock_price: 1600
    }
  ]);
});

module.exports = router;