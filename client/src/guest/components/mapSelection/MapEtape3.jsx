import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useParams } from 'react-router-dom';
import Routing2D from "./Routing2D";

const MapEtape3 = (props) => {
  // function linkValue() {
  //   if (infra_eau === "fpmh") { return "/citerne3d" }
  //   if (infra_eau === "aepg") { return "/station3d" }
  // }
  const { urlDebutLat, urlDebutLng } = useParams();
  //le any @ client fa tsy ilaina intsony 
  // const { urlFinLat, urlFinLng } = useParams();
  //ary @ admin maka anle finLng
  const { finLat, finLng } = useParams();
  console.log("debuLat"+urlDebutLat,"debutLong"+ urlDebutLng,"finLat"+finLat,"finLong"+finLng);
  
  const position = [-18.865447, 47.519533];
  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* le ary @ admin  */}
      <Routing2D debutLat={finLat} debutLng={urlDebutLng} finLat={finLat} finLng={finLng} />
    </MapContainer>
  );
}
export default MapEtape3;