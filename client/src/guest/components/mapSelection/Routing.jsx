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

const Routing = ({ debutLat, debutLng, finLat, finLng }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(debutLat, debutLng), L.latLng(finLat, finLng)],
      ////
      // test
      // waypoints: [L.latLng(-18.917878596902497, 47.528027490672216), L.latLng(- 18.914333061129806, 47.523922047810416)],
      // router: L.routing.graphHopper( /* graphHopper API KEY */ , {
      //   urlParameters: {
      //     vehicle: 'foot'
      //   }
      // }),
      ////
      routeWhileDragging: true,
      lineOptions: { styles: [{ color: "blue", opacity: "0.6", weight: 10 }] }
    }).addTo(map);
    
//     var legend = L.control({ position: "bottomleft", width:500});

//     legend.onAdd = function(map) {
//       var div = L.DomUtil.create("div", "legend");
//       div.innerHTML += "<h4>Vue2D</h4>";
//       div.innerHTML += '<i style="background: #477AC2"></i><span>Ankadifotsy</span><br>';
//       div.innerHTML += '<i style="background: #448D40"></i><span>Behoririka</span><br>';
//       div.innerHTML += '<i style="background: #E6E696"></i><span>Distance:600m</span><br>';
      
      

//       return div;
// };

// legend.addTo(map);
// var legend = L.control({ position: "bottomright" });

// legend.onAdd = function(map) {
//   var div = L.DomUtil.create("div", "legend");
//   div.innerHTML += "<h4>Vue en 2D</h4>";
//   div.innerHTML += '<i class="icon" style="background-image: url(https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png);background-repeat: no-repeat;"></i><span>Début de Localité : Ankadifotsy</span><br>';
//   div.innerHTML += '<i class="icon2" style="background-image: url(https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png);background-repeat: no-repeat;"></i><span>Fin de Localité : Behoririka</span><br>';
//   div.innerHTML += '<i class="icon3" style="background-image: url(https://www.clipartmax.com/png/small/299-2996821_distance-icon-distance-icon.png);background-repeat: no-repeat;"></i><span>Distance : 600m</span><br></br>';

  

//   return div;
// };
// legend.addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
export default Routing;