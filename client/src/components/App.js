import logo from '../assets/logo.svg';
import '../styles/App.css';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Carte from '../components/Carte';
import AjoutFormulaire from '../components/AjoutFormulaire';
import ListeProjet from '../components/ListeProjet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adduction3d from './Adduction3d';
import Axios, * as others from 'axios';

function App() {
	const getJoke = () => {
		Axios.get('http://localhost:8080/reactgive').then(response => {
			console.log(response);
		});
	};

	return (
		<div>
			{/* <button onClick={getJoke}>Give</button> */}
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />}>
						{' '}
					</Route>
					<Route path="/" element={<Home />}>
						<Route path="" element={<Carte />} />
						<Route path="carte" element={<Carte />} />
						<Route path="3d" element={<Adduction3d />} />
						<Route path="liste" element={<ListeProjet />} />
						<Route path="ajout" element={<AjoutFormulaire />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
