import { post, get, postUpload } from './axios';

export const postPersonas = async (data) => {
	return await post('/personas', data);
};

export const getPersonas = async () => {
	return await get('/personas');
};

export const postInventory = async (data) => {
	return await post('/mediaowner/create', data);
};

export const uploadAvatar = async (data) => {
	return await postUpload('/mediaowner/uploadAvatar', data);
};