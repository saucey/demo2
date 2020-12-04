import axios from 'axios';
import { API } from '../../constants';
 
export const post = async (relativeUrl, data) => {
	try {
		const url = API + relativeUrl;
		
		return await axios.post(url, data);
	} catch (error) {
		throw error.response.data.error;
	}
};
