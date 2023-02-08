import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

const Zoo = () => {
	//UseState
	const [zoo, setZoo] = React.useState({
		zooName: '',
		animals: [],
		species: [],
		allAnimals: [],
	});

	let handleInputChange = (event) =>
		setZoo({ ...zoo, zooName: event.target.value });

	//UseEffect
	React.useEffect(() => {
		fetch('http://localhost:3001/zoo') // GET
			.then((response) => response.json())
			.then((data) => {
				setZoo({
					...zoo,
					animals: data.animals,
					species: data.species,
					allAnimals: data.animals,
				});
			})
			.catch((err) => console.log(err));
	}, []);

	let handleSpecies = (event) => {
		setZoo({
			...zoo,
			animals: zoo.allAnimals.filter(
				(animal) => animal.specie === event.target.value,
			),
		});
	};

	let handleAllSpecies = () => {
		setZoo({ ...zoo, animals: zoo.allAnimals });
	};

	return (
		<div>
			<label>Zoo Name:</label>
			<input onChange={handleInputChange} type="text" value={zoo.zooName} />
			<h1>{zoo.zooName}</h1>
			<Species
				species={zoo.species}
				handleSpecies={handleSpecies}
				handleAllSpecies={handleAllSpecies}
			/>
			<Animals animals={zoo.animals} />
		</div>
	);
};

export default Zoo;
