import React from 'react';
import styled from 'styled-components';

const DivButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const Buttons = styled.button`
	padding: 5px;
	margin: 10px;
	margin-left: 1rem;
	margin-right: 1rem;
	font-size: 1.5rem;
	font-family: 'Times New Roman', Times, serif;
	padding: 15px 32px;
	text-align: center;
	border-radius: 5px;
	-webkit-transition-duration: 0.4s;
	transition-duration: 0.4s;
	border: grey;
	&:hover {
		background-color: rgb(179, 214, 20);
		color: white;
		border-color: rgb(179, 214, 20);
		box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
			0 17px 50px 0 rgba(0, 0, 0, 0.19);
	}
`;

export default class Botones extends React.Component {
	render() {
		const { alerts } = this.props;
		return (
			<DivButtons>
				<Buttons onClick={() => window.alert(alerts.m1)}>Módulo 1</Buttons>
				<Buttons onClick={() => window.alert(alerts.m2)}>Módulo 2</Buttons>
			</DivButtons>
		);
	}
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons };
