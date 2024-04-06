import axios from "axios";

export const privateAPi = axios.create({
    baseURL: `${import.meta.env.privateApi}`
})

privateAPi.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    const customConfig = config

    if(config) config.headers.Authorization = `Bearer ${token}`

    return customConfig
})