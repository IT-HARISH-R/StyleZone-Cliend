import axios from "axios";

const baseURL = 'http://localhost:3000/api/v1'
// const baseURL = 'https://gpcv-backend.onrender.com/api/v1'

const instance = axios.create({
    baseURL,
    // timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  export default instance;