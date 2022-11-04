import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./redux/redux";
import MapPage from './guest/components/map/MapPage';
import MapRouting from './admin/components/mapRouting/Map'
import Home from './guest/pages/home/Home'
import AjoutFormulaire from './admin/components/formulaire/AjoutFormulaire'
import CrudProjet from './admin/components/CrudProjet/CrudProjet'
import ListeProjet from './guest/components/listeProjet/ListeProjet'
import Login from './guest/pages/login/Login';
import Inscription from './guest/pages/login/Inscription';
import Admin from './admin/pages/Main.jsx';
import Citerne2d from './guest/components/2d/citerne2d/Citerne2d';
import MapCanal from './guest/components/mapCanal/Map';
import MapEtape1 from './guest/components/mapSelection/MapEtape1';
import MapEtape2 from './guest/components/mapSelection/MapEtape2';
import MapEtape3 from './guest/components/mapSelection/MapEtape3';
import Citerne3d from './guest/components/3d/citerne3d/CiternePage';
import Tuyaux3d from './guest/components/3d/tuyaux3d/TuyauxPage';
import Pump3d from './guest/components/3d/pumb3d/PumpPage';
import TodList from './guest/components/todoList/TodoList';
import Adduction from './admin/components/formulaire/Adduction'
import TableauStat from './guest/components/tableauStat/TableauStat';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<MapPage />} />
            <Route path="carte" element={<MapPage />} />
            <Route path="citerne3d" element={<Citerne3d />} />
            <Route path="tuyaux3d" element={<Tuyaux3d />} />
            <Route path="pump3d" element={<Pump3d />} />
            <Route path="listeProjet" element={<ListeProjet />} />
            <Route path="login" element={<Login />} />
            <Route path="ajoutCanalisation1" element={<MapEtape1 />} />
            <Route path="ajoutCanalisation2/:urlDebutLat/:urlDebutLng" element={<MapEtape2 />} />
            <Route path="ajoutCanalisation3/:urlDebutLat/:urlDebutLng/:urlFinLat/:urlFinLng" element={<MapEtape3 />} />
            <Route path="canalisation" element={<MapCanal />} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="citerne2d/:latitude/:longitude/:region/:point_eau/:infra_eau" element={<Citerne2d />} />
            <Route path="tableauStat" element={<TableauStat />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="" element={<  MapRouting />} />
            <Route path="formulaire/:urlDebutLat/:urlDebutLng" element={<AjoutFormulaire />} />
            <Route path="liste" element={<CrudProjet />} />
            <Route path="adduction" element={<Adduction />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};
export default App;