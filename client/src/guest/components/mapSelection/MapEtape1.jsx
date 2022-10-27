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
class MapEtape1 extends Component {
  constructor(props) {
    super(props);
    this.state = { debutLat: null, debutLng: null, finLat: null, finLng: null };
  }
  state = { map: null };
  componentDidUpdate(prevProps, prevState) {
    const { map } = this.state;
    if (prevState.map !== map && map) {
      map.on("click", function (e) {
        this.setState({ debutLat: e.latlng.lat, debutLng: e.latlng.lng });
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
              console.log("Etape 1  debut " + this.state.debutLat + " " + this.state.debutLng + " fin " + this.state.finLat + " " + this.state.finLng)
            }</Popup>
          </Marker>
        </MapContainer>

        <div className='CardContainer'>
          <Card className='MyCard'>
            Emmplacement 1 : ville Antananrivo Commune Ambanidia
            {`Latitude ${this.state.debutLat} longitude ${this.state.debutLng}`}
            <br></br>

            <br></br>
            <Link to={`/ajoutCanalisation2/${this.state.debutLat}/${this.state.debutLng}`}>
              <Button className='MyButton' ><MuiIcons.CheckCircleOutline />   Suivant</Button>
            </Link>
          </Card>
        </div>
      </div>

    );
  }
}

export default MapEtape1;
