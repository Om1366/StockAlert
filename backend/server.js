const express = require("express");
const cors = require("cors");
const dashboardRoute = require("./routes/dashboard");
const stocksRoute = require("./routes/stocks");
const alertsRoute = require("./routes/alerts");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stocks", stocksRoute);
app.use("/api/dashboard", dashboardRoute);
app.use("/api/alerts", alertsRoute);
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
