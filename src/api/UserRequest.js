import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || '';
if (!import.meta.env.VITE_API_URL) {
  // eslint-disable-next-line no-console
  console.warn('[UserRequest] VITE_API_URL is not set.');
}

const API = axios.create({ baseURL, withCredentials: true });


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