import axios, { InternalAxiosRequestConfig } from "axios";

const baseApiKey = import.meta.env.VITE_API_KEY

const $host = axios.create({
    baseURL: baseApiKey
})

const $authHost = axios.create({
    baseURL: baseApiKey
});

const authInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem("token");

    if(token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
}

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost }