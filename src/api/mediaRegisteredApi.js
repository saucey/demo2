import axios from 'axios';

const mediaRegisteredApi = async (url, data) => {
	try {
		const resp = await axios.post(url, data);
		console.log(resp, 'Sucecess the api service!!!!')
		return resp
		
	} catch (error) {
		console.log(error, 'Failure the api service!!!!')
		// return error
	}
}

export default mediaRegisteredApi;