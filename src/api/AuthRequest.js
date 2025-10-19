import axios from 'axios';

// Backend URL from environment variable
const API_URL = import.meta.env.VITE_API_URL;

// Create axios instance with backend baseURL
const API = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

// Login request
export const logIn = (formData) => API.post('/auth/login', formData);

// Register request
export const signUp = (formData) => API.post('/auth/register', formData);
