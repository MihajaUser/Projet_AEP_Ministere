import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/redux";
import MapPage from './guest/components/map/MapPage';
import MapRouting from './admin/components/mapRouting/Map'
import Home from './guest/pages/home/Home'
import CiternePage from './guest/components/citerne/CiternePage';
import AjoutFormulaire from './admin/components/formulaire/AjoutFormulaire'
import CrudProjet from './admin/components/CrudProjet/CrudProjet'
import ListeProjet from './guest/components/listeProjet/ListeProjet'
import Login from './guest/pages/login/Login';
import Inscription from './guest/pages/login/Inscription';
import Admin from './admin/pages/Main.jsx';
import Citerne2d from './guest/components/citerne2d/Citerne2d';
import MapCanal from './guest/components/mapCanal/Map';
import MapSelection from './admin/components/mapSelection/Map';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<MapPage />} />
            <Route path="carte" element={<MapPage />} />
            <Route path="adduction3d" element={<CiternePage />} />
            <Route path="listeProjet" element={<ListeProjet />} />
            <Route path="login" element={<Login />} />
            <Route path="canalisation" element={<MapCanal />} />
            <Route path="mapSelection" element={<MapSelection />} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="citerne2d/:latitude/:longitude/:region/:point_eau/:infra_eau" element={<Citerne2d />} />
          </Route>
          <Route path="admin/" element={<Admin />}>
            <Route path="" element={<  MapRouting />} />
            <Route path="formulaire" element={<AjoutFormulaire />} />
            {/* <Route path="login" element={<Login />} />*/}
            <Route path="liste" element={<CrudProjet />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};
export default App;