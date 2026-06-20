import { useEffect, useState } from "react";
import axios from "axios";

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios
      .get("http://13.206.124.22:3001/api/alerts")
      .then((res) => {
        setAlerts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚨 Stock Alerts</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Current Price</th>
            <th>Target Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.stock_name}</td>
              <td>₹{alert.current_price}</td>
              <td>₹{alert.target_price}</td>
              <td>{alert.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Alerts;
