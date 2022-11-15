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

const iconRobinet = new L.Icon({
  iconUrl: require('../../assets/imagesClient/robinet_bleu.png'),
  iconSize: [38, 60],
  shadowSize: [50, 64]
});
const iconStation = new L.Icon({
  iconUrl: require('../../assets/imagesClient/station_rouge.png'),
  iconSize: [45, 50],
  shadowSize: [50, 64]
});

const Map = (props) => {
  const myStation = useSelector((state) => state.station)
  useEffect(() => {
    console.log(myStation)
  }, [myStation])

  function valeurIcon(s) {
    let myIcon
    if (s.infra_eau === "aepg") myIcon = iconStation
    if (s.infra_eau === "fpmh") myIcon = iconRobinet
    return (
      <Marker position={{ lat: s.latitude, lng: s.longitude }} icon={myIcon}>
        <Popup>
          Usine de madagascar
          <a href={`citerne2d/${s.latitude} /${s.longitude}/${s.region}/${s.point_eau}/${s.infra_eau}`}> En savoir plus</a>
        </Popup>
      </Marker>
    )
  }
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
      {myStation.stations.map((s) => (valeurIcon(s)))
      }
    </FeatureGroup>
  </MapContainer>;
};

export default Map;
