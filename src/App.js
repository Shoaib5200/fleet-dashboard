import { useState, useEffect } from "react";
import { vehicles } from "./data";
import MapView from "./MapView";
import "./App.css";

function App() {
  const [fleet, setFleet] = useState(

    vehicles.map(v => ({
      ...v,
      position: [v.lat, v.lng]
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setFleet(prev =>
          prev.map(v => ({
            ...v,
            position: [
              v.position[0] + (Math.random() - 0.5) * 0.001,
              v.position[1] + (Math.random() - 0.5) * 0.001
            ]
          }))
        );
      }, 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1>SYNGOLETTA Fleet Management Dashboard</h1>
      <p>Total Vehicles: {fleet.length}</p>
      <table>
        <thead>
          <tr>
            <th>Vehicle</th>
            <th>Status</th>
            <th>Battery</th>
          </tr>
        </thead>

        <tbody>
          {fleet.map(v => (
            <tr key={v.id}>
              <td>{v.name}</td>
              <td style={{ color: v.status === "Active" ? "green" : v.status === "Charging" ? "orange" : "gray" }}>
                {v.status}</td>

              {/* <td>{v.status}</td> */}
              <td>{v.battery}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Live Fleet Map</h2>
      <MapView fleet={fleet} />

    </div>
  );
}

export default App;
