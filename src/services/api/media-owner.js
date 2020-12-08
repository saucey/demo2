import { post, get } from './axios';

export const createApi = async (data) => {
	return await post('/personas', data);
};

export const getPersonas = async () => {
	return await get('/personas');
};
