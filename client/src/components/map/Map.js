import React, { useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  ScaleControl,
  LayersControl,
  FeatureGroup,
  Marker,
  Tooltip, Popup
} from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const markerIcon = new L.Icon({
  iconUrl: require('../../assets/localisation.png'),
  iconSize: [20, 20],
});

const Map = (props) => {
  const map = useMemo(() => {
    return (
      <MapContainer
        doubleClickZoom={false}
        id="mapId"
        zoom={5.5}
        center={{ lat: -18.865447, lng: 47.519533 }}
        whenCreated={props.setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ScaleControl />
        <FeatureGroup>
          <Marker position={{ lat: -18.865447, lng: 47.519533 }} icon={markerIcon}>	<Popup>Usine de madagascar<a href="adduction3d"> En savoir plus</a> </Popup></Marker>
        </FeatureGroup>
      </MapContainer>
    );
  }, []);

  return map;
};

export default Map;
