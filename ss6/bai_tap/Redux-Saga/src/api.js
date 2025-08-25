import axios from 'axios';


const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: { 'Content-Type': 'application/json' }
});


export const fetchUsers = () => api.get('/users');
export const deleteUserApi = (id) => api.delete(`/users/${id}`);