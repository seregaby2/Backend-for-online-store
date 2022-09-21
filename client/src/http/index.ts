import axios, { AxiosRequestConfig } from 'axios';
import { REACT_APP_API_URL } from '../utils/consts';

export const $host = axios.create({
  baseURL: REACT_APP_API_URL,
});

export const $authHost = axios.create({
  baseURL: REACT_APP_API_URL,
});
const authInterceptor = (config: AxiosRequestConfig) => {
  config.headers!.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};
$authHost.interceptors.request.use(authInterceptor);
