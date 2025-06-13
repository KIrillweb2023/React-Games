import { useState } from "react";
import { MAIN_APP_ROUTES } from "../routes/routes";
import { store } from "../store/store";
import { AuthLayoutValue } from "../types/AuthenficateProps.types";
import { useNavigate } from "react-router-dom";


export const usePlayGamesReact = () => {
    const { isLoginAuth, isRegistrationAuth, dataUser } = store();
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const navigate = useNavigate();

    const [AuthValues, setAuthValues] = useState<AuthLayoutValue>({
        email: "", password: "", nikname: ""
    })

    const authRequest = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();

        try {
            if(isLogin) {
                await isLoginAuth({ 
                    email: AuthValues.email, 
                    password: AuthValues.password 
                })
            } else {
                await isRegistrationAuth({ ...AuthValues })
            }
            // console.log(dataUser)

            setAuthValues(({ email: "", nikname: "", password: "" }))

            console.log(dataUser)

            if(dataUser.isLogin) {
                console.log(dataUser.isLogin)
            }

            navigate(MAIN_APP_ROUTES.HOME_PAGE)
        } catch(err: any) {
            navigate(MAIN_APP_ROUTES.AUTH_PAGE)
        }
            
    }

    return {
        authRequest, setAuthValues, isLogin, AuthValues, setIsLogin
    }
}