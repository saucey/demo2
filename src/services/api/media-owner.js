import { post } from './axios';

export const createApi = async (data) => {
	return await post('/mediaowner/create', data);
};
