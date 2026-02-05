function VehicleRow({ vehicle }) {
  return (
    <tr>
      <td>{vehicle.name}</td>
      <td>{vehicle.status}</td>
      <td>{vehicle.battery}%</td>
    </tr>
  );
}

export default VehicleRow;
