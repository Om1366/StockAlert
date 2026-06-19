const express = require("express");
const cors = require("cors");

const stocksRoute = require("./routes/stocks");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stocks", stocksRoute);

app.get("/", (req, res) => {
  res.send("StockAlert Backend Running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "StockAlert API Running"
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
