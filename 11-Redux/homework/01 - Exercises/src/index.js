const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento } = require('./actions');

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
let store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
let valor = document.getElementById('valor');

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
	// Obtenemos la propiedad 'contador' de nuestro store:
	let contadorState = store.getState().contador;
	// Seteamos el número obtenido como texto dentro del elemento con id 'valor':

	valor.innerText = contadorState;
}

// Ejecutamos la función 'renderContador':
renderContador();

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);
// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

let btnIncremento = document.getElementById('incremento');
let btnDecremento = document.getElementById('decremento');
let btnIncrementoPar = document.getElementById('incrementoPar');
let btnIncrementoImpar = document.getElementById('incrementoImpar');
let btnIncrementoAsync = document.getElementById('incrementoAsync');

btnIncremento.addEventListener('click', () => store.dispatch(incremento()));

btnDecremento.addEventListener(
	'click',
	() => valor.innerHTML > 0 && store.dispatch(decremento()),
);

btnIncrementoPar.addEventListener(
	'click',
	() => valor.innerHTML % 2 === 0 && store.dispatch(incremento()),
);

btnIncrementoImpar.addEventListener(
	'click',
	() => valor.innerHTML % 2 !== 0 && store.dispatch(incremento()),
);

btnIncrementoAsync.addEventListener('click', () =>
	setTimeout(() => {
		store.dispatch(incremento());
	}, 2000),
);
