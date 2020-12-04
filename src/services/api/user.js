import { post, get } from './axios';
import { SECRET_KEY } from '../../constants';

export async function getCurrentUser() {
  try {
    const token = getToken();
    if (!token) {
      return Promise.resolve(null);
    }

    const res = await get('/users/current', true);
    
    return res.data;
  } catch (err) {
    await handleError(err)
  }
}

export const registerApi = async (data) => {
	const response = await post('/register', data);
	window.localStorage.setItem(SECRET_KEY, response.data.secret);

	if(response.data.secret) {
	  return getCurrentUser();
	}
	return response;
};

export const loginApi = async (data) => {
	const response = await post('/login', data);
	window.localStorage.setItem(SECRET_KEY, response.data.secret);

	if(response.data.secret) {
	  return getCurrentUser();
	}
	return response;
};

export function logout() {
  window.localStorage.removeItem(SECRET_KEY)
  window.location.href = '/';
}

export function getToken() {
  return window.localStorage.getItem(SECRET_KEY)
}

export async function handleError(err) {
  if (err && err.response && err.response.status === 401) {
    await logout();
  }
}
