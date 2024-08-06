import axios from 'axios';
import authInterceptor from './auth/authInterceptor';

const urls = {
    dev: 'http://localhost:5000',
    production: 'https://kaniback.onrender.com',
}

// const api = axios.create({
//     baseURL: import.meta.env.VITE_BASE_URL
// });
const api = axios.create({
    baseURL: urls.dev
});

api.interceptors.request.use(authInterceptor, (error) => Promise.reject(error));

export default api;