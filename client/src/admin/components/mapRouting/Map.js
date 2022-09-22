import React from "react";
import L from "leaflet";
import "./Style.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

const style = {
  width: "100%",
  height: "800px",
};
L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});
class Map extends React.Component {

  componentDidMount() {
    this.map = L.map("map", {
      center: [-18.865447, 47.519533],
      zoom: 5.5,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });


    var routeControl = L.Routing.control({
      show: true,
      fitSelectedRoutes: true,
      plan: false,
      lineOptions: {
        styles: [
          {
            color: "blue",
            opacity: "0.7",
            weight: 6
          }
        ]
      }
    })
      .addTo(this.map)
      .getPlan();

    var newLatLngA = new L.LatLng(-18.91475822499691, 47.52127235226638, "taskA");
    var newLatLngB = new L.LatLng(-18.97889074319738, 47.54152839506674, "taskB");
    var newLatLngC = new L.LatLng(65.05098, 25.474349, "taskc");

    routeControl.setWaypoints([newLatLngA, newLatLngB]);
  }
  render() {
    return <div id="map" style={style} />;
  }
}

export default Map;
