import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Dashboard() {

const [stats, setStats] = useState({
    totalStocks: 0,
    totalAlerts: 0
  });

  useEffect(() => {
    axios
      .get("http://13.206.124.22:3001/api/dashboard")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>📈 StockAlert Dashboard</h1>

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px"
      }}>
        <div style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h2>{stats.totalStocks}</h2>
          <p>Total Stocks</p>
        </div>

        <div style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h2>{stats.totalAlerts}</h2>
          <p>Total Reports</p>
        </div>

        <div style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h2>3</h2>
          <p>Total Users</p>
        </div>
      </div>

      <br />

      <Link to="/stocks">📊 Manage Stocks</Link>
      <br /><br />

      <Link to="/alerts">🚨 Stock Alerts</Link>
      <br /><br />
      <Link to="/reports">📁 Manage Reports</Link>
    </div>
  );
}

export default Dashboard;
