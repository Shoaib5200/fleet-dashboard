import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ vehicles }) {
  return (
    <MapContainer center={[43.6532, -79.3832]} zoom={11} style={{ height: "400px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {vehicles.map(v => (
        <Marker key={v.id} position={[v.lat, v.lng]}>
          <Popup>
            {v.name}<br />Status: {v.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
