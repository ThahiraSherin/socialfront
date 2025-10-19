import axios from 'axios';

// Backend URL from environment variable
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // this now points to Render backend
  withCredentials: true, // optional if you use cookies
});

// Login request
export const logIn = (formData) => API.post('/auth/login', formData);

// Register request
export const signUp = (formData) => API.post('/auth/register', formData);
