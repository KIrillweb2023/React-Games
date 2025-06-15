import axios from "axios";
import { AuthInterceptor } from "./interceptors.api";

const baseApiKey = import.meta.env.VITE_API_KEY

const $host = axios.create({ baseURL: baseApiKey })
const $authHost = axios.create({ baseURL: baseApiKey});


$authHost.interceptors.request.use(AuthInterceptor);


export {
    $host, $authHost
}