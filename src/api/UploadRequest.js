import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // this now points to Render backend
  withCredentials: true, // optional if you use cookies
});

export const uploadImage = (data) => API.post('/upload/', data);
export const uploadPost = (data) => API.post('/post', data);