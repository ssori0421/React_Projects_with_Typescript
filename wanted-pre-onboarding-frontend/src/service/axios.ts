import axios from 'axios';
import { getAccessToken } from '../util/localstorage';
const defaultOptions = {
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
  headers: {
    'Content-Type': 'application/json',
  },
};
const instance = axios.create(defaultOptions);

const authInstance = axios.create(defaultOptions);

authInstance.interceptors.request.use((config) => {
  const access_token = getAccessToken();
  if (access_token) {
    const token = JSON.parse(access_token);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { instance, authInstance };
