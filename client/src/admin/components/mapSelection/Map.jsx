import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "./constants";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { debutLat: null, debutLong: null, finLat: null, finLong: null };
  }
  state = { map: null };
  componentDidUpdate(prevProps, prevState) {
    const { map } = this.state;
    if (prevState.map !== map && map) {
      map.on("click", function (e) {


        alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng + " ");

      });
    }

  }
  render() {


    return (
      <MapContainer
        className="leaflet-map"
        center={{ lat: -18.865447, lng: 47.519533 }}
        zoom={5.5}
        scrollWheelZoom={true}
        style={{ height: "100vh" }}
        whenCreated={(map) => this.setState({ map })}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={{ lat: -18.865447, lng: 47.519533 }} icon={icon}>
          <Popup>Here you are ^_^{
            console.log("ito " + this.state.comment)
          }</Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map;
