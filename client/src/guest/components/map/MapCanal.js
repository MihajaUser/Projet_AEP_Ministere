import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  ScaleControl,
  LayersControl,
  FeatureGroup,
  Marker,
  Tooltip, Popup
} from "react-leaflet";

const markerIcon = new L.Icon({
  iconUrl: require('../../assets/imagesClient/localisation.png'),
  iconSize: [20, 20],
});

const MapCanal = (props) => {
  const myStation = useSelector((state) => state.station)
  useEffect(() => {
  }, [myStation])
  return <MapContainer
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

    </FeatureGroup>
  </MapContainer>;
};

export default MapCanal;
