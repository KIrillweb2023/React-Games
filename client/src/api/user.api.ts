import { jwtDecode } from "jwt-decode";
import { AuthCredentials, UserData } from "../types/AuthenficateProps.types"
import { $authHost, $host } from "./index.api";

const RegistrationApi = async (values: AuthCredentials): Promise<UserData> => {
    const { data } = await $host.post("/api/user/registration", { ...values });
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}

const LoginApi = async (values: AuthCredentials): Promise<UserData> => {
    const { data } = await $host.post("/api/user/login", { ...values });
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}

const AuthApi = async (): Promise<UserData> => {
    const { data } = await $authHost.get("/api/user/auth");
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token);
}

export { RegistrationApi, LoginApi, AuthApi }