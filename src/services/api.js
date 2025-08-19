import axios from 'axios';

const API = axios.create({
    baseURL : 'https://coursebooking-2-hwmy.onrender.com',
    withCredentials: true, //agar cookies ka use ho rha hai
});

export default API;