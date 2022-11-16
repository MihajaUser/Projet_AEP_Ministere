import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import * as MuiIcons from '@mui/icons-material';
import './styles.css'

const MapEtape1 = (props) => {
  const myStation = useSelector((state) => state.station)
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

  useEffect(() => {
    //initialisation carte
    mapRef.current = L.map('map', mapParams);
    mapRef.current.on('click', (e) => {
      //click une Deuxieme localisation
      setFinLat(e.latlng.lat);
      setFinLng(e.latlng.lng);
    });
    L.marker([urlDebutLat, urlDebutLng]).addTo(mapRef.current).bindPopup('Premiere localisation').openPopup();
    setMapInstance(mapRef.current);
  }, []);

  useEffect(() => {
    //changer  Deuxieme localisation
    if (finLat != null && finLng != null) {
      handleClick();
    }
  }, [finLat, finLng])

  useEffect(() => {
    //faire zoom
    if (!mapInstance) return;
    if (mapInstance) {
      mapInstance.on('zoomstart', () => {
        console.log('Zooming!!!');
      });
    }
  }, [mapInstance]);
  useEffect(() => {
    console.log("fin====================================")
    console.log(finLat)
    console.log(finLng)
  }, [myStation, finLat, finLng])


  const handleClick = () => {
    // placer marker avec click
    if (marker) {
      marker.removeFrom(mapInstance);
      markerRef.current = null;
    } else {
      markerRef.current = L.marker([finLat, finLng]).addTo(mapInstance).bindPopup('Deuxieme localisation').openPopup();
    }
    setMarker(markerRef.current);
  };
  const suggestion = () => {
    // placer marker sur reservoir proche
    const proche = nearestReservoir({ "latitude": urlDebutLat, "longitude": urlDebutLng }, myStation.stations)
    setFinLat(proche.latitude);
    setFinLng(proche.longitude);
    if (marker) {
      marker.removeFrom(mapInstance);
      markerRef.current = null;
    } else {
      markerRef.current = L.marker([proche.latitude, proche.longitude]).addTo(mapInstance).bindPopup('Reservoir Proche').openPopup();
    }
    setMarker(markerRef.current);
  };

  const nearestReservoir = (onePoint, tab) => {
    //fonction trouver plus proche
    var iFrom;
    var iDistance = 0
    var iMinimum;
    var minDistance = 0
    var minimum = tab[0];
    console.log("tab ")
    console.log(tab.length)
    for (let i = 0; i < tab.length; i++) {
      iMinimum = L.latLng([minimum.latitude, minimum.longitude])
      iFrom = L.latLng([tab[i].latitude, tab[i].longitude])
      minDistance = iMinimum.distanceTo(([onePoint.latitude, onePoint.longitude]))
      iDistance = iFrom.distanceTo(([onePoint.latitude, onePoint.longitude]))
      if (minDistance > iDistance) {
        minimum = tab[i]
      }
    }
    console.log(minimum)
    return minimum;
  }
  return (
    <>
      <div id="map" style={mapStyles} />
      <div className='CardContainer'>
        <Card className='MyCard'>
          <Button className='BSuggestion' onClick={suggestion}> Marquer Reservoir Proche</Button>
          ETAPE 2
          <br></br>
          Emmplacement 1  : ville Antananrivo Commune Ambohijatovo
          {` Latitude ${urlDebutLat} longitude ${urlDebutLng}`}
          <br></br>
          Emmplacement 2  : ville Antananrivo Commune Ambohijatovo
          {` Latitude ${finLat} longitude ${finLng}`}
          <br></br>
          <br></br>
          <Link to={`/admin/canalisation/${urlDebutLat}/${urlDebutLng}/${finLat}/${finLng}`}>
            <Button className='MyButton' ><MuiIcons.CheckCircleOutline />   Suivant</Button>
          </Link>
        </Card>
      </div>
    </>
  );
};

export default MapEtape1;