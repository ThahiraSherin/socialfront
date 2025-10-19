import axios from 'axios';

// Backend base URL (set VITE_API_URL in your environment for production)
const baseURL = import.meta.env.VITE_API_URL || '';
if (!import.meta.env.VITE_API_URL) {
  // warn loudly so deploys surface the misconfiguration instead of silently calling the frontend origin
  // (Netlify and other hosts are case-sensitive — set VITE_API_URL in build/deploy settings)
  // eslint-disable-next-line no-console
  console.warn('[AuthRequest] VITE_API_URL is not set. API requests will be relative to the front-end origin. Set VITE_API_URL to your backend URL (e.g. https://api.example.com).');
}

const API = axios.create({ baseURL, withCredentials: true });

// Login request
export const logIn = (formData) => API.post('/auth/login', formData);

// Register request
export const signUp = (formData) => API.post('/auth/register', formData);
