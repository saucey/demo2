import axios from 'axios';

const mediaRegisteredApi = async (url, data) => {
	try {
		const resp = await axios.post(url, data);
		return resp

	} catch (error) {
		throw error.response.data.error
	}
}

export const getLogin = data => {
	return axios.post(`http://18.191.199.214:5000/api/v1/login`, data);
};

export const getRegister = data => {
	return axios.post(`http://18.191.199.214:5000/api/v1/register`, data);
};

export default mediaRegisteredApi;