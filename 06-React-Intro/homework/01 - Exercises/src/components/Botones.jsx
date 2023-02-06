import React from 'react';
import { alerts } from './Bienvenido';

const Botones = () => {
	return (
		<>
			<button onClick={() => alert(alerts.m1)}>Modulo 1</button>
			<button onClick={() => alert(alerts.m2)}>Modulo 2</button>
		</>
	);
};

export default Botones;
