import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // this now points to Render backend
  withCredentials: true, // optional if you use cookies
});

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) => API.put(`post/${id}/like_dislike`, { userId: userId })