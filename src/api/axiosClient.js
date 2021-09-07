import { config } from 'common/config';
import queryString from 'query-string';
import axios from 'axios';

const axiosClient = axios.create({
  baseUrl: config.SUBMIT_API,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use((response) => {
  if(response && response.data)
    return response.data;
  return response;
}, (error) => {
  throw error;
});

export default axiosClient;