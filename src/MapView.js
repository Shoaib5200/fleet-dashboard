import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import carIconImg from "./assets/car.png";

// Create custom car icon
const carIcon = new L.Icon({
  iconUrl: carIconImg,
  iconSize: [32, 32],      // size of icon
  iconAnchor: [16, 32],    // point of the icon which corresponds to marker location
  popupAnchor: [0, -32]    // popup position
});

function MapView({ fleet }) {
  if (!fleet || fleet.length === 0) return null;

  return (
    <MapContainer
      center={[43.6532, -79.3832]}
      zoom={11}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {fleet.map(v => (
        <Marker key={v.id} position={v.position} icon={carIcon}>
          <Popup>
            <strong>{v.name}</strong><br />
            Status: {v.status}<br />
            Battery: {v.battery}%
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
