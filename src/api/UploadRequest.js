import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || '';
if (!import.meta.env.VITE_API_URL) {
  // eslint-disable-next-line no-console
  console.warn('[UploadRequest] VITE_API_URL is not set.');
}

const API = axios.create({ baseURL, withCredentials: true });

export const uploadImage = (data) => API.post('/upload/', data);
export const uploadPost = (data) => API.post('/post', data);