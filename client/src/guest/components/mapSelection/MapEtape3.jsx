import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useParams } from 'react-router-dom';
import Routing from "./Routing";

const MapEtape3 = (props) => {
  const { urlDebutLat, urlDebutLng } = useParams();
  const { urlFinLat, urlFinLng } = useParams();
  const position = [-18.865447, 47.519533];
  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing debutLat={urlFinLat} debutLng={urlDebutLng} finLat={urlFinLat} finLng={urlFinLng} />
    </MapContainer>
  );
}
export default MapEtape3;