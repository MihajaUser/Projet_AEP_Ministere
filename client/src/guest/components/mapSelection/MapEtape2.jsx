import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import * as MuiIcons from '@mui/icons-material';
import './styles.css'

const MapEtape1 = (props) => {
  const { urlDebutLat, urlDebutLng } = useParams();
  const [finLat, setFinLat] = useState(null);
  const [finLng, setFinLng] = useState(null);
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
    overflow: 'hidden',
    width: '100%',
    height: '60vh',
  };

  const mapParams = {
    center: [-18.865447, 47.519533],
    zoom: 6,
    zoomControl: false,
    zoomSnap: 0.75,
    layers: [tileRef.current],
  };

  // Map creation:
  useEffect(() => {
    mapRef.current = L.map('map', mapParams);
    mapRef.current.on('click', (e) => {
      setFinLat(e.latlng.lat);
      setFinLng(e.latlng.lng);
    });
    setMapInstance(mapRef.current);
  }, []);

  useEffect(() => {
    if (!mapInstance) return;
    if (mapInstance) {
      mapInstance.on('zoomstart', () => {
        console.log('Zooming!!!');
      });
    }
  }, [mapInstance]);

  // Toggle marker on button click:
  const handleClick = () => {
    if (marker) {
      marker.removeFrom(mapInstance);
      markerRef.current = null;
    } else {
      markerRef.current = L.marker([-18.865447, 47.519533]).addTo(mapInstance);
    }
    setMarker(markerRef.current);
  };

  return (

    <>
      <button onClick={handleClick}>
        {`Click to ${marker ? 'remove' : 'add'} marker`}
      </button>
      <div id="map" style={mapStyles} />
      <div className='CardContainer'>
        <Card className='MyCard'>
          ETAPE 2
          <br></br>
          Emmplacement 1  : ville Antananrivo Commune Ambohijatovo
          {` Latitude ${urlDebutLat} longitude ${urlDebutLng}`}
          <br></br>
          Emmplacement 2  : ville Antananrivo Commune Ambohijatovo
          {` Latitude ${finLat} longitude ${finLng}`}
          <br></br>
          <br></br>
          <Link to={`/ajoutCanalisation3/`}>
            <Button className='MyButton' ><MuiIcons.CheckCircleOutline />   Suivant</Button>
          </Link>
        </Card>
      </div>
    </>
  );
};

export default MapEtape1;