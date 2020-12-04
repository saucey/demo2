import { post } from './axios';

export const registerApi = async (data) => {
	return await post('/register', data);
};

export const loginApi = async (data) => {
	return await post('/login', data);
};

export const createApi = async (data) => {
	return await post('/mediaowner/create', data);
};
