import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Create axios instance with backend baseURL
const API = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});


API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})


export const getUser = (userId) => API.get(`/user/${userId}`);

export const updateUser = (id, formData) => API.put(`/user/${id}`, formData);

export const getAllUser = () => API.get('/user');

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data);

export const unFollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data);