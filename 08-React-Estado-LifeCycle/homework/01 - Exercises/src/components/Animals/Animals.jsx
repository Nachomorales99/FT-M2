import React from 'react';

class Animals extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		let { animals } = this.props;
		return (
			<div>
				{animals.map((animal, index) => (
					<div key={index}>
						<h5>{animal.name}</h5>
						<img src={animal.image} alt={animal.name} width="300px" />
						<p>{animal.specie}</p>
					</div>
				))}
			</div>
		);
	}
}

export default Animals;
