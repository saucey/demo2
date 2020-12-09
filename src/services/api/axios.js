import axios from 'axios';
import { API } from '../../constants';
import { getToken } from './user';

export const post = async (relativeUrl, data) => {
	console.log(data, '!!!!!!!!!!!!AAAAAA')
	try {
		const url = API + relativeUrl;

		axios.defaults.headers.common['Authorization'] = `Bearer NshB3CWkLG_oK4b25CR6xnUbwCb9oTXh4hBP0nclJJE`;
		return await axios.post(url, data);
	} catch (error) {
		throw error.response.data.error;
	}
};

export const postUpload = async (relativeUrl, data) => {
	try {
		const url = API + relativeUrl;
		axios.defaults.headers.common['Authorization'] = `Bearer NshB3CWkLG_oK4b25CR6xnUbwCb9oTXh4hBP0nclJJE`;
		
		let formData = new FormData();
		formData.append('avatar', data.avatar);

		return axios.post(url, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
	  })

	} catch (error) {
		throw error.response.data.error;
	}
};

export const get = async (relativeUrl, isBearer) => {
	try {
		const url = API + relativeUrl;
		const token = getToken();

		// if(isBearer) {
		axios.defaults.headers.common['Authorization'] = `Bearer NshB3CWkLG_oK4b25CR6xnUbwCb9oTXh4hBP0nclJJE`;
		// } 

		return await axios.get(url);
	} catch (error) {
		throw error;
	}
};
