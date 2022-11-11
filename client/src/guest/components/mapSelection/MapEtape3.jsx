import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useParams ,useLocation } from 'react-router-dom';
import Routing from "./Routing";

const MapEtape3 = (props) => {
  const { urlDebutLat, urlDebutLng } = useParams();
  // const { urlFinLat, urlFinLng } = useParams();
  console.log("debuLat"+urlDebutLat,"debutLong"+ urlDebutLng,"finLat"+finLat,"finLong"+finLng);
  //ary @ admin maka anle finLng
  const { finLat, finLng } = useParams();
  // const { urlDebutLat, urlDebutLng } = useLocation();
  // const { urlFinLat, urlFinLng } = useLocation();
  const position = [-18.865447, 47.519533];
  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Routing debutLat={urlFinLat} debutLng={urlDebutLng} finLat={urlFinLat} finLng={urlFinLng} /> */}
      
      {/* le ary @ admin fa mbola tsy mandeha */}
      <Routing debutLat={finLat} debutLng={urlDebutLng} finLat={finLat} finLng={finLng} />
    </MapContainer>
  );
}
export default MapEtape3;