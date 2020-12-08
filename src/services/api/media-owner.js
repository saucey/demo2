import { post, get } from './axios';

export const postPersonas = async (data) => {
	return await post('/personas', data);
};

export const getPersonas = async () => {
	return await get('/personas');
};

export const postInventory = async (data) => {
	return await post('/mediaowner/create', data);
};