import logo from '../assets/logo.svg';
import '../styles/App.css';
import Header from './Header';
import Carte from './Carte';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adduction3d from './Adduction3d';
// import { Axios } from 'axios';
import Axios, * as others from 'axios';
import '../styles/Carte.css';

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
					<Route path="/header" element={<Header />} />
					<Route path="/adduction3d" element={<Adduction3d />} />
				</Routes>
			</BrowserRouter>
			<Header />
			<Carte />
			<Footer />
		</div>
	);
}

export default App;
