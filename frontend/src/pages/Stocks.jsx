import { useEffect, useState } from "react";
import axios from "axios";

function Stocks() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/stocks")
      .then((res) => {
        setStocks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Stock Management</h1>

      <ul>
        {stocks.map((stock) => (
          <li key={stock.id}>
            {stock.stock_name} - ₹{stock.stock_price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stocks;