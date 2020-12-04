import axios from 'axios';
import { API } from '../../constants';
import { getToken } from './user';
 
export const post = async (relativeUrl, data) => {
	try {
		const url = API + relativeUrl;
		
		return await axios.post(url, data);
	} catch (error) {
		throw error.response.data.error;
	}
};

export const get = async (relativeUrl, isBearer) => {
	try {
		const url = API + relativeUrl;
		const token = getToken();

		if(isBearer) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		} 

    return await axios.get(url);
  } catch (error) {
    throw error;
  }
};
