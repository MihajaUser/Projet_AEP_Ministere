import React from "react";
import L from "leaflet";
import "./Style.css";
require("leaflet-routing-machine");

const style = {
  width: "100%",
  height: "95%"
};

const tabRoute = [];
const canalisation = [
  { "nom": "Tana1", "debutLat": -18.874121734092128, "debutLong": 47.506414002608906, "finLat": -18.873522767197834, "finLong": 47.51183206482083 },
  { "nom": "Tana2", "debutLat": -18.876243480952564, "debutLong": 47.5049548809043, "finLat": -18.877329723732718, "finLong": 47.50936443252628 },
  { "nom": "Tana3", "debutLat": -18.878568234958397, "debutLong": 47.50514799995343, "finLat": -18.878802454164994, "finLong": 47.50730907973457 }
]

class Map extends React.Component {
  componentDidMount() {
    //construction de la carte
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
    //initianlisation des canalisation 
    canalisation.map((el) => (
      tabRoute.push({
        "route": L.Routing.control({ show: true, fitSelectedRoutes: true, plan: false, lineOptions: { styles: [{ color: "blue", opacity: "0.7", weight: 6 }] } }),
        "debutLat": el.debutLat, "debutLong": el.debutLong, "finLat": el.finLat, "finLong": el.finLong
      })
    ))

    //dessin des canalisation
    tabRoute.map((el) => (
      console.log("debut"),
      el.route.addTo(this.map).getPlan(),
      el.route.setWaypoints([new L.LatLng(el.debutLat, el.debutLong, "taskA"), new L.LatLng(el.finLat, el.finLong, "taskB")])
    ))

  }
  render() {
    return <div id="map" style={style} />;
  }
}

export default Map;
