import { AuthLayoutValue } from "../types/AuthenficateProps.types";
import { $authHost, $host } from "./init-axios";
import { jwtDecode } from "jwt-decode";


export const registration: React.FC<AuthLayoutValue> = async ({email, nikname, password}) => {
    const { data } = await $host.post("/user/registration", { email, nikname, password });
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}

export const login: React.FC<AuthLayoutValue> = async ({email, password}) => {
    const { data } = await $host.post("/user/login", { email, password });
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}

export const auth = async () => {
    const { data } = await $authHost.get("/user/auth");
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token);
}

