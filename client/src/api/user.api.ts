import { jwtDecode } from "jwt-decode";
import { AuthLayoutValue } from "../types/AuthenficateProps.types"
import { $authHost, $host } from "./index.api";

const RegistrationApi: React.FC<AuthLayoutValue> = async (values) => {
    const { data } = await $host.post("/api/user/registration", { ...values });
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}

const LoginApi: React.FC<AuthLayoutValue> = async (values) => {
    const { data } = await $host.post("/api/user/login", { ...values });
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}

const AuthApi = async () => {
    const { data } = await $authHost.get("/api/user/auth");
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token);
}

export { RegistrationApi, LoginApi, AuthApi }