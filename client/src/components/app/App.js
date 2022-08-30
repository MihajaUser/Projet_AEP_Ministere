
import MapPage from '../map/MapPage';
import Axios, * as others from 'axios';
import React, { useState } from "react";
import logo from '../../assets/logo.svg';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Citerne from '../citerne/Citerne';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adduction3d from '../adduction3d/Adduction3d';
import CiternePage from '../citerne/CiternePage';
import Sidebar from '../react-leaflet-sidetabs/Sidebar'



function App() {
  const getJoke = () => {
    Axios.get('http://localhost:8080/reactgive').then(response => {
      console.log(response);
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/" element={<Home />}>
          <Route path="" element={<MapPage />} />
          <Route path="carte" element={<MapPage />} />
          <Route path="adduction3d" element={<CiternePage />} />
          <Route path="login2" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
