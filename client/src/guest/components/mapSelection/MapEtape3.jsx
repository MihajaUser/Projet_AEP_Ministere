import React from "react";
import L from "leaflet";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import * as MuiIcons from '@mui/icons-material';
import './styles.css'
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
      layers: [L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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
            color: "DarkBlue",
            opacity: "0.7",
            weight: 10
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
    return (
      <div>
        <div id="map" style={style}>
        </div>
        <div className='CardContainerEtape3'>
          <Card className='MyCard'>
            Etape 3
            <br></br>

            <br></br>
            <Link to={"/ajoutCanalisation3"}>
              <Button className='MyButton' ><MuiIcons.CheckCircleOutline />   Validation</Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }
}

export default MapEtape3;
