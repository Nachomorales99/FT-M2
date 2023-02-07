import React from 'react';
import Botones from './Botones';

const studentName = 'Nacho Morales';
const techSkills = ['Html', 'Css', 'JavaScript', 'React', 'Redux'];
const alerts = { m1: 'Aprobado', m2: 'En curso' };

export default function Bienvenido() {
	// el código de tu componente acá
	return (
		<div>
			<h1>Lista de Skills</h1>
			<h3>{studentName}</h3>
			<hr />
			<ul>
				{techSkills.map((str, index) => (
					<li key={index}>{str}</li>
				))}
			</ul>
			<hr />
			<Botones alerts={alerts} />
		</div>
	);
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
