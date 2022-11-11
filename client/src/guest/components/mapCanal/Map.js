import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Routing from "../mapSelection/Routing";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Map = (props) => {
  const myCanalisation = useSelector((state) => state.canalisation)
  const position = [-18.865447, 47.519533];
  useEffect(() => {
    console.log("dans canal==========")
    console.log(myCanalisation.canalisations)
  }, [myCanalisation])

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {myCanalisation.canalisations.map((el) =>
      (
        <Routing debutLat={el.debutLatitude} debutLng={el.debutLongitude} finLat={el.finLattitude} finLng={el.finLongitude} />
      ))}
    </MapContainer>
  );
}
export default Map;