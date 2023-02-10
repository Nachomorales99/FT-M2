import React from 'react';
import './Contact.modules.css';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export let validate = ({ name, email, message }) => {
	let errors = {};
	//Validamos Name
	if (!name) errors.name = 'Se requiere un nombre';

	//Validamos email
	if (!regexEmail.test(email)) errors.email = 'Debe ser un correo electrónico';

	//Validamos mensaje
	if (!message) errors.message = 'Se requiere un mensaje';

	return errors;
};

const Contact = () => {
	const [inputs, setInputs] = React.useState({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = React.useState({
		name: '',
		email: '',
		message: '',
	});

	let handleChange = (event) => {
		let property = event.target.name;
		let value = event.target.value;
		setInputs({ ...inputs, [property]: value });

		setErrors(validate({ ...inputs, [property]: value }));
	};

	let handleSubmit = (event) => {
		event.preventDefault();

		if (!Object.keys(errors).length) {
			alert('Datos completos');
			setErrors({
				name: '',
				email: '',
				message: '',
			});
			setInputs({
				name: '',
				email: '',
				message: '',
			});
		} else {
			alert('Debe llenar todos los campos');
		}
	};

	return (
		<>
			<form action="">
				<label htmlFor="name">Nombre:</label>
				<input
					type="text"
					name="name"
					placeholder="Escribe tu nombre..."
					value={inputs.name}
					onChange={handleChange}
					className={errors.name && 'warning'}
				/>
				{errors.name && <p className="danger">{errors.name}</p>}

				<label htmlFor="email">Correo Electrónico:</label>
				<input
					type="text"
					name="email"
					placeholder="Escribe tu email..."
					value={inputs.email}
					onChange={handleChange}
					className={errors.email && 'warning'}
				/>
				{errors.email && <p className="danger">{errors.name}</p>}

				<label htmlFor="message">Mensaje:</label>
				<textarea
					cols="30"
					rows="10"
					type="text"
					name="message"
					placeholder="Escribe tu mensaje..."
					value={inputs.message}
					onChange={handleChange}
					className={errors.message && 'warning'}
				/>
				{errors.message && <p className="danger">{errors.name}</p>}
				<button onSubmit={handleSubmit} type="submit">
					Enviar
				</button>
			</form>
		</>
	);
};

export default Contact;
