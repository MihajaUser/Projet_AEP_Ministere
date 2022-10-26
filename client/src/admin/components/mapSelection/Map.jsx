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
        // <Alert key={1} variant={"primary"}>
        //   This is a {"primary"} alert with{' '}
        //   <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
        //   you like.
        // </Alert>
        //this.history.push('/dasda')
        this.props.history.push("url")
        // history.push(url)
        alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng + " ");

      });
    }

  }
  render() {
    const DEFAULT_LATITUDE = -18.865447;
    const DEFAULT_LONGITUDE = 47.519533;
    const latitude = this.props.coords
      ? this.props.coords.latitude
      : DEFAULT_LATITUDE;
    const longitude = this.props.coords
      ? this.props.coords.latitude
      : DEFAULT_LONGITUDE;

    return (
      <MapContainer
        className="leaflet-map"
        center={[latitude, longitude]}
        zoom={5.5}
        scrollWheelZoom={true}
        style={{ height: "100vh" }}
        whenCreated={(map) => this.setState({ map })}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={icon}>
          <Popup>Here you are ^_^{
            // console.log("ito " + this.state.comment)
          }</Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map;
