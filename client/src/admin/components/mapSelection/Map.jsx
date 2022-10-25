import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "./constants";

class Map extends Component {
  state = { map: null };

  componentDidUpdate(prevProps, prevState) {
    const { map } = this.state;
    if (prevState.map !== map && map) {
      map.on("click", function (e) {
        alert(e);
      });
    }
  }

  render() {
    //-18.865447, lng: 47.519533
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
          <Popup>Here you are ^_^</Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map;
