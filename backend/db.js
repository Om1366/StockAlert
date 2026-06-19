const mysql = require("mysql2");

const db = mysql.createPool({
  host: "stockalert-db.cf8e2see2ua8.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "StockAlert123!",
  database: "stockalert",
  port: 3306,
});

db.getConnection((err, connection) => {
  if (err) {
    console.log("POOL ERROR:", err);
    return;
  }

  console.log("Database Connected Successfully");
  connection.release();
});

module.exports = db;
