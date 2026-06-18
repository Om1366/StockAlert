function Reports() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📁 Reports</h1>

      <input type="file" />

      <br /><br />

      <button>Upload Report</button>

      <hr />

      <h3>Uploaded Reports</h3>

      <ul>
        <li>Q1_Report.pdf</li>
        <li>Market_Analysis.pdf</li>
      </ul>
    </div>
  );
}

export default Reports;