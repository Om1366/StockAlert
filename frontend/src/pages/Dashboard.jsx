import { Link } from "react-router-dom";

function Dashboard() {
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
          <h2>12</h2>
          <p>Total Stocks</p>
        </div>

        <div style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h2>5</h2>
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

      <Link to="/reports">📁 Manage Reports</Link>
    </div>
  );
}

export default Dashboard;