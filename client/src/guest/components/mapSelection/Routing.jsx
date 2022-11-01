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
      // test
      waypoints: [L.latLng(-18.917878596902497, 47.528027490672216), L.latLng(- 18.914333061129806, 47.523922047810416)],
      //waypoints: [L.latLng(debutLat, debutLng), L.latLng(finLat, finLng)],
      routeWhileDragging: true,
      lineOptions: { styles: [{ color: "blue", opacity: "0.7", weight: 6 }] }
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
export default Routing;