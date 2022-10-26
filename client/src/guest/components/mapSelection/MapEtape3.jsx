import React from "react";
import L from "leaflet";
require("leaflet-routing-machine");
const style = {
  width: "100%",
  height: "95%"
};
class MapEtape3 extends React.Component {
  componentDidMount() {
    // create map
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
            color: "green",
            opacity: "0.7",
            weight: 6
          }
        ]
      }
    })
      .addTo(this.map)
      .getPlan();

    var newLatLngA = new L.LatLng(-18.874121734092128, 47.506414002608906, "taskA");
    var newLatLngB = new L.LatLng(-18.873522767197834, 47.51183206482083, "taskB");


    routeControl.setWaypoints([newLatLngA, newLatLngB]);
  }
  render() {
    return <div id="map" style={style} />;
  }
}

export default MapEtape3;
