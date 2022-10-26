import React from "react";
import L from "leaflet";
require("leaflet-routing-machine");
const style = {
  width: "90%",
  height: "500px"
};
class MapEtape3 extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [65.012357, 25.483549],
      zoom: 7,
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
            color: "green",
            opacity: "0.7",
            weight: 6
          }
        ]
      }
    })
      .addTo(this.map)
      .getPlan();

    var newLatLngA = new L.LatLng(65.012357, 25.483549, "taskA");
    var newLatLngB = new L.LatLng(65.01615, 25.471847, "taskB");
    var newLatLngC = new L.LatLng(65.05098, 25.474349, "taskc");

    routeControl.setWaypoints([newLatLngA, newLatLngB]);
  }
  render() {
    return <div id="map" style={style} />;
  }
}

export default MapEtape3;
