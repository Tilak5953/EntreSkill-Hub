// Axios API instance with JWT interceptor
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

import axios from 'axios';

const api = axios.create({
  // Hardcoded production URL to ensure connection
  baseURL: 'https://entreskill-hub-4dp4.onrender.com/api',
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 — expired/invalid token
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
