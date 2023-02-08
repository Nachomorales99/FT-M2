import React from 'react';

const Species = ({ species, handleSpecies, handleAllSpecies }) => {
	return (
		<div>
			<h2>Species</h2>
			{species.map((specie, index) => {
				return (
					<button key={index} onClick={handleSpecies} value={specie}>
						{specie}
					</button>
				);
			})}
			<button onClick={handleAllSpecies}>All Animals</button>
		</div>
	);
};

export default Species;
