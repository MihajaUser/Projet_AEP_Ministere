import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import './styles.css';
L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
  // iconUrl: <img src={robinet} alt="robinet_bleu.png" className='icone' />
});

const Routing2D = ({ debutLat, debutLng, finLat, finLng }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(debutLat, debutLng), L.latLng(finLat, finLng)],
      routeWhileDragging: true,
      lineOptions: { styles: [{ color: "blue", opacity: "0.6", weight: 10 }] }
    }).addTo(map);

    


var legend = L.control({ position: "bottomright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Vue en 2D</h4>";
  div.innerHTML += '<i class="icon" style="background-image: url(https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png);background-repeat: no-repeat;"></i><span>Début de Localité : Tsaralalana</span><br>';
  div.innerHTML += '<i class="icon2" style="background-image: url(https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png);background-repeat: no-repeat;"></i><span>Fin de Localité : Antaninarenina</span><br>';
  div.innerHTML += '<i class="icon3" style="background-image: url(https://www.clipartmax.com/png/small/299-2996821_distance-icon-distance-icon.png);background-repeat: no-repeat;"></i><span>Distance : 700m</span><br></br>';

  

  return div;
};
legend.addTo(map);


    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
export default Routing2D;