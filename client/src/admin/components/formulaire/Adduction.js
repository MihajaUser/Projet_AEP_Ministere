import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import * as MuiIcons from '@mui/icons-material';
import './styles.css'

const MapEtape1 = (props) => {
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

  // Map creation:
  useEffect(() => {
    mapRef.current = L.map('map', mapParams);
    mapRef.current.on('click', (e) => {
      // handleClick();
      setDebutLat(e.latlng.lat);
      setDebutLng(e.latlng.lng);
    });
    setMapInstance(mapRef.current);
  }, []);
  useEffect(() => {
    //changer  premiere localisation
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
  // Toggle marker on button click:
  const handleClick = () => {
    // placer marker avec click
    if (marker) {
      marker.removeFrom(mapInstance);
      markerRef.current = null;
    } else {
      markerRef.current = L.marker([debutLat, debutLng]).addTo(mapInstance);
    }
    setMarker(markerRef.current);
  };
  function textEmplacement() {
    if (debutLat == null && debutLng == null) {
      return " Clique sur la carte ."
    }
    return " Votre choix est validé ."
  }
  return (
    <>
      <div id="map" style={mapStyles} />
      <div className='CardContainer'>
        <Card className='MyCard'>
          ETAPE 1
          <br></br>
          Emmplacement   :
          {textEmplacement()}
          {/* {` Latitude ${debutLat} longitude ${debutLng}`} */}
          <br></br>
          <br></br>
          <Link to={`/admin/formulaire/${debutLat}/${debutLng}`}>
            <Button className='MyButton' ><MuiIcons.CheckCircleOutline />   Suivant</Button>
          </Link>
        </Card>
      </div>
    </>
  );
};

export default MapEtape1;