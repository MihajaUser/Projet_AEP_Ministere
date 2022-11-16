import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  ScaleControl,
  FeatureGroup,
  Marker,
  Popup,
} from "react-leaflet";

const markerIcon = new L.Icon({
  iconUrl: require('../../assets/images/reservoir.png'),
  iconSize: [20, 20],
});

const MapAdduction = (props) => {
  const myStation = useSelector((state) => state.station)
  useEffect(() => {
    console.log(myStation)
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
      {myStation.stations.map((s) => (
        <Marker position={{ lat: s.latitude, lng: s.longitude }} icon={markerIcon}>
          <Popup>
            <p>{s.utilisation}
            <a href={`citerne2d/${s.latitude} /${s.longitude}/${s.region}/${s.point_eau}/${s.infra_eau}`}> En savoir plus</a></p>
          </Popup>
        </Marker>))
      }
    </FeatureGroup>
  </MapContainer>;
};

export default MapAdduction;
