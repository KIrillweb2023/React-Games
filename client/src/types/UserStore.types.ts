
import { AuthLayoutValue, UserData } from "./AuthenficateProps.types";

export interface UserStore {
    dataUser: {
        user: UserData | null;
        error: string | null;
        isLoading: boolean;
    };

    isLoginAuth: (credentials: AuthLayoutValue) => void;
    isRegistrationAuth: (credentials: AuthLayoutValue) => void;
    isVerifyToken: () => void

}