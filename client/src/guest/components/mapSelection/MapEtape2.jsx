import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "./constants";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import * as MuiIcons from '@mui/icons-material';
import './styles.css'
import withRouter from './withRouter';
class MapEtape2 extends Component {
  constructor(props) {
    super(props);
    this.state = { debutLat: null, debutLng: null, finLat: null, finLng: null };
  }
  state = { map: null };
  componentDidUpdate(prevProps, prevState) {
    const { map } = this.state;
    if (prevState.map !== map && map) {
      map.on("click", function (e) {
        this.setState({ finLat: e.latlng.lat, finLng: e.latlng.lng });
      }.bind(this));
    }
  }
  render() {
    return (
      <div>
        <MapContainer
          className="leaflet-map"
          center={{ lat: -18.865447, lng: 47.519533 }}
          zoom={5.5}
          scrollWheelZoom={true}
          style={{ height: "55vh" }}
          whenCreated={(map) => this.setState({ map })}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={{ lat: -18.865447, lng: 47.519533 }} icon={icon}>
            <Popup>Here you are ^_^{
              console.log("Etape 2 debut " + this.state.debutLat + " " + this.state.debutLng + " fin " + this.state.finLat + " " + this.state.finLng)
            }</Popup>
          </Marker>
        </MapContainer>

        <div className='CardContainer'>
          <Card className='MyCard'>
            Emmplacement 2  : ville Antananrivo Commune Ambohijatovo
            {`Latitude ${this.state.finLat} longitude ${this.state.finLng}`}
            <br></br>

            <br></br>
            <Link to={"/ajoutCanalisation3"}>
              <Button className='MyButton' ><MuiIcons.CheckCircleOutline />   Suivant</Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }
}

export default MapEtape2;
