import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from "react-redux";
import L from 'leaflet';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import * as MuiIcons from '@mui/icons-material';
import * as GeometryUtil from "leaflet-geometryutil";
import './styles.css'

const MapEtape1 = (props) => {
  const myStation = useSelector((state) => state.station)
  const [debutLat, setDebutLat] = useState(null);
  const [debutLng, setDebutLng] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [marker, setMarker] = useState(null);
  const mapRef = useRef(null);
  const tileRef = useRef(null);
  const markerRef = useRef(null);
  tileRef.current = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );
  const mapStyles = {
    overflow: 'hidden', width: '100%', height: '60vh'
  };
  const mapParams = {
    center: [-18.865447, 47.519533], zoom: 6, zoomControl: false, zoomSnap: 0.75, layers: [tileRef.current]
  };

  useEffect(() => {
    mapRef.current = L.map('map', mapParams);
    mapRef.current.on('click', (e) => {
      setDebutLat(e.latlng.lat);
      setDebutLng(e.latlng.lng);
    });
    setMapInstance(mapRef.current);
  }, []);

  useEffect(() => {
    if (debutLat != null && debutLng != null) {
      handleClick();
    }
  }, [debutLat, debutLng])

  useEffect(() => {
    if (!mapInstance) return;
    if (mapInstance) {
      mapInstance.on('zoomstart', () => {
        console.log('Zooming!!!');
      });
    }
  }, [mapInstance]);

  useEffect(() => {
    nearestReservoir()
  }, [])
  const nearestReservoir = () => {
    console.log("nearestReservoir")
    const tab = [
      { "lat": -18.97633509237672, "lng": 47.532593368495704, "nom": "fidy Andoharanofotsy" },
      { "lat": -18.979973950086347, "lng": 47.533121489658186, "nom": "pharmacie andoharanofotsy" },
      { "lat": -18.93891790675198, "lng": 47.521987974044215, "nom": " gastro sonerana" },
      { "lat": - 12.303105648724799, "lng": 49.29392259399195, "nom": " Antsiranana" },
      { "lat": - 18.914889469284635, "lng": 47.52474209363391, "nom": " Saint michel " },
      { "lat": -18.915728372526345, "lng": 47.531181417949941, "nom": " Andohalo " }
    ]
    var iFrom;
    var jFrom;
    var iDistance = 0
    var jDistance = 0
    var minimum = tab[0];
    for (let i = 0; i < tab.length; i++) {
      for (let j = 0; j < tab.length; j++) {
        iFrom = L.latLng([tab[i].lat, tab[i].lng])
        jFrom = L.latLng([tab[j].lat, tab[j].lng])
        iDistance = iFrom.distanceTo(([-18.91555964362533, 47.53035641290226]))
        jDistance = jFrom.distanceTo(([-18.91555964362533, 47.53035641290226]))
        if (iDistance > jDistance) {
          minimum = tab[j]
        }
      }
      console.log("le minimum")
      console.log(minimum)
      return minimum;
    }

  }

  const handleClick = () => {
    if (marker) {
      marker.removeFrom(mapInstance);
      markerRef.current = null;
    } else {
      markerRef.current = L.marker([debutLat, debutLng]).addTo(mapInstance);
    }
    setMarker(markerRef.current);
  };

  return (
    <>
      <div id="map" style={mapStyles} />
      <div className='CardContainer'>
        <Card className='MyCard'>
          ETAPE 1
          <br></br>
          Emplacement 1  : ville Antananrivo Commune Ambohijatovo
          {` Latitude ${debutLat} longitude ${debutLng}`}
          <br></br>
          <br></br>
          <Link to={`/ajoutCanalisation2/${debutLat}/${debutLng}`}>
            <Button className='MyButton' ><MuiIcons.CheckCircleOutline />   Suivant</Button>
          </Link>
        </Card>
      </div>
    </>
  );
};

export default MapEtape1;