import { InternalAxiosRequestConfig } from "axios";

const AuthInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem("token");

    if(token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
}

export {
    AuthInterceptor
}