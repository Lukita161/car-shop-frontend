import axios from "axios";

export const axiosPrivateInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})
axiosPrivateInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('sessionKey')
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export const axiosPublicInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})