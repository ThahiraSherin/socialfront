import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || '';
if (!import.meta.env.VITE_API_URL) {
  // eslint-disable-next-line no-console
  console.warn('[PostRequest] VITE_API_URL is not set. API requests will be relative to the front-end origin.');
}

const API = axios.create({ baseURL, withCredentials: true });

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) => API.put(`post/${id}/like_dislike`, { userId: userId });