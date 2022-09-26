import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/redux";
import MapPage from './guest/components/map/MapPage';
import MapRouting from './admin/components/mapRouting/Map'
import Home from './guest/pages/home/Home'
import CiternePage from './guest/components/citerne/CiternePage';
import Login from './guest/pages/login/Login';
import Admin from './admin/pages/Main.jsx';
import Citerne2d from './guest/components/citerne2d/Citerne2d';
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<MapPage />} />
            <Route path="carte" element={<MapPage />} />
            <Route path="adduction3d" element={<CiternePage />} />
            <Route path="login2" element={<Login />} />
            <Route path="citerne2d" element={<Citerne2d />} />
          </Route>
          <Route path="/admin" element={<Admin />} >
            <Route path="" element={<  MapRouting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;