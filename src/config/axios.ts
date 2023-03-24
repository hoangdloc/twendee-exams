import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://randomuser.me/api',
  responseType: 'json'
});

export default axiosInstance;
