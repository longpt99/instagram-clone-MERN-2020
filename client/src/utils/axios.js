import axios from 'axios';
import queryString from 'query-string';
import { getToken } from 'utils';
  
const instance = axios.create({
  baseURL: '/api',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

instance.interceptors.request.use((config) => {
  const token = getToken()
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
})

instance.interceptors.response.use((response) => {
  if (response?.data) {
    return response.data;
  }
    return response;
  }, (error) => {
  if (error.response.data.msg === 'Token Expired') {
    localStorage.removeItem('access_token');
    return window.location.href = '/login';
  }
  return Promise.reject(error.response.data);
});

export default instance;