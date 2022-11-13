import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
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
      lineOptions: { styles: [{ color: "blue", opacity: "0.7", weight: 6 }] }
    }).addTo(map);
    var legend = L.control({ position: "bottomleft" });

    legend.onAdd = function (map) {
      var div = L.DomUtil.create("div", "legend");
      div.innerHTML += "<h4>Tegnforklaring</h4>";
      div.innerHTML += '<i style="background: #477AC2"></i><span>Water</span><br>';
      div.innerHTML += '<i style="background: #448D40"></i><span>Forest</span><br>';
      div.innerHTML += '<i style="background: #E6E696"></i><span>Land</span><br>';
      div.innerHTML += '<i style="background: #E8E6E0"></i><span>Residential</span><br>';
      div.innerHTML += '<i style="background: #FFFFFF"></i><span>Ice</span><br>';
      div.innerHTML += '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';

      return div;
    };

    legend.addTo(map);
    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
export default Routing;