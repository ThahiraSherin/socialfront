import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Create axios instance with backend baseURL
const API = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const uploadImage = (data) => API.post('/upload/', data);
export const uploadPost = (data) => API.post('/post', data);