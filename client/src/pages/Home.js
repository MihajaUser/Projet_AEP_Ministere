import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Carte from '../components/Carte';
import { Outlet } from 'react-router';

const Home = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Home;
