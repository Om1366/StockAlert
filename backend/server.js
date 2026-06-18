const express = require("express");
const cors = require("cors");
// const mysql = require("mysql2");
require("dotenv").config();
const stocksRoute = require("./routes/stocks");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/stocks", stocksRoute);

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   waitForConnections: true,
//   connectionLimit: 10
// });

// db.connect((err) => {
//   if (err) {
//     console.log("Database Error:", err);
//     return;
//   }

//   console.log("MySQL Connected Successfully");
// });

app.get("/", (req, res) => {
  res.send("StockAlert Backend Running");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "StockAlert API Running"
  });
});