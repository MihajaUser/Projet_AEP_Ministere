import React from "react";
import L from "leaflet";
import "./Style.css";

require("leaflet-routing-machine");

const style = {
  width: "100%",
  height: "100%"
};

class Map extends React.Component {
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
            color: "blue",
            opacity: "0.7",
            weight: 6
          }
        ]
      }
    })
      .addTo(this.map)
      .getPlan();

    var routeControl2 = L.Routing.control({
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

    var newLatLngA = new L.LatLng(-18.880652545742503, 47.50655576416184, "taskA");
    var newLatLngA1 = new L.LatLng(-18.879076187699845, 47.509762346609016, "taskB");

    //-18.885426795728815, 47.50894252066036
    //-18.886554961596023, 47.51020979012965

    var newLatLngB = new L.LatLng(-18.885426795728815, 47.50894252066036, "taskA");
    var newLatLngB1 = new L.LatLng(-18.886554961596023, 47.51020979012965, "taskB");

    routeControl.setWaypoints([newLatLngA, newLatLngA1]);
    routeControl2.setWaypoints([newLatLngB, newLatLngB1]);
  }
  render() {
    return <div id="map" style={style} />;
  }
}

export default Map;
