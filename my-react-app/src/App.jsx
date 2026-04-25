import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [side, setSide] = useState("");
  const [area, setArea] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [animated, setAnimated] = useState(false);

  const calculateArea = async () => {
    if (!side || Number(side) <= 0) {
      setError("Please enter a valid side length.");
      setArea(null);
      return;
    }
    setLoading(true);
    setError("");
    setAnimated(false);
    try {
      const response = await axios.get("http://localhost:8080/api/area", {
        params: { side },
      });
      setArea(response.data);
      setTimeout(() => setAnimated(true), 50);
    } catch {
      setError("Cannot connect to backend. Make sure Spring Boot is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") calculateArea();
  };

  return (
    <div className="page">
      <div className="card">
        <div className="icon-box">
          <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
            <rect x="6" y="6" width="36" height="36" rx="4" stroke="#6c63ff" strokeWidth="3"/>
            <rect x="14" y="14" width="20" height="20" rx="2" fill="#6c63ff" opacity="0.15"/>
            <line x1="24" y1="6" x2="24" y2="42" stroke="#6c63ff" strokeWidth="1.5" strokeDasharray="3 3"/>
            <line x1="6" y1="24" x2="42" y2="24" stroke="#6c63ff" strokeWidth="1.5" strokeDasharray="3 3"/>
          </svg>
        </div>

        <h1 className="title">Square Area</h1>
        <p className="subtitle">Enter the side length to calculate</p>

        <div className="input-group">
          <input
            type="number"
            className="input"
            placeholder="Side length"
            value={side}
            onChange={(e) => setSide(e.target.value)}
            onKeyDown={handleKey}
            min="0"
          />
          <span className="unit">units</span>
        </div>

        <button
          className={`btn ${loading ? "loading" : ""}`}
          onClick={calculateArea}
          disabled={loading}
        >
          {loading ? "Calculating..." : "Calculate Area"}
        </button>

        {error && <div className="error">{error}</div>}

        {area !== null && !error && (
          <div className={`result-box ${animated ? "show" : ""}`}>
            <p className="result-label">Area</p>
            <p className="result-value">{area}</p>
            <p className="result-unit">square units</p>
            <div className="formula">
              <span>{side} × {side} = {area}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;