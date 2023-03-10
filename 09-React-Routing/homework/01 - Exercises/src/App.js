import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Shipping from './components/Shipping/Shipping.jsx';
import Promotions from './components/Promotions/Promotions.jsx';
import CardDetail from './components/CardDetail/CardDetail.jsx';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shipping" element={<Shipping />} />
				<Route path="/promotions" element={<Promotions />} />
				<Route path="/cruises/:id" element={<CardDetail />} />
			</Routes>
		</>
	);
}

export default App;
