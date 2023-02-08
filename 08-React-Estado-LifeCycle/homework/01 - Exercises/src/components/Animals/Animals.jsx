import React from 'react';

class Animals extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		let width = {
			width: '300px',
		};
		return (
			<div>
				{this.props.animals.map((animal, index) => (
					<div key={index}>
						<h5>{animal.name}</h5>
						<img src={animal.image} alt={animal.name} style={width} />
						<p>{animal.specie}</p>
					</div>
				))}
			</div>
		);
	}
}

export default Animals;
