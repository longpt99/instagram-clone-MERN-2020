import axios from 'axios';
import queryString from 'query-string';
  
const instance = axios.create({
  baseURL: '/api',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
})

instance.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
  }, (error) => {
    // debugger;
  if (error.response.status === 401) {
    localStorage.removeItem('access_token');
    return window.location.href = '/login';
  }
  return Promise.reject(error.response.data);
});

export default instance;