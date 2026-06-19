const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "stockalert-db.cf8e2see2ua8.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "StockAlert123!",
  database: "stockalert",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Connected!");

  connection.query(
    "SELECT * FROM stocks",
    (err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(results);
      connection.end();
    }
  );
});
