import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Create axios instance with backend baseURL
const API = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) => API.put(`post/${id}/like_dislike`, { userId: userId })