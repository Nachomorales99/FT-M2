import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from './types.js';
import axios from 'axios';

export let addProduct = (product) => {
	return { type: ADD_PRODUCT, payload: product };
};

export let deleteProduct = (id) => {
	return { type: DELETE_PRODUCT, payload: id };
};
export let getStoreName = () => {
	return async function (dispatch) {
		let response = await axios.get('http://localhost:3001/store');
		return dispatch({ type: GET_STORE_NAME, payload: response.data.name });
	};
};
