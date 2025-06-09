import { $authHost, $host } from "./init-axios";
import { jwtDecode } from "jwt-decode";


export const registration = async ({email, nikname, password}: { email: string, nikname: string, password: string }) => {
    const { data } = await $host.post("/user/registration", { email, nikname, password });
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}

export const login = async ({email, nikname, password}: { email: string, nikname: string, password: string }) => {
    const { data } = await $host.post("/user/login", { email, nikname, password });
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}

export const auth = async () => {
    const { data } = await $authHost.get("/user/auth");
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token);
}

