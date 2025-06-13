import { ChangeEvent } from "react";
import { LoginField } from "../../components/LoginField/LoginField";
import { RegistrationField } from "../../components/RegistrationField/RegistrationField";
import { usePlayGamesReact } from "../../service/PlayGamesReact";
import "./AuthPage.scss";


export const AuthPage = () => {
    const { setAuthValues, authRequest, isLogin, setIsLogin, AuthValues } = usePlayGamesReact()

    const HandleEventForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setAuthValues((prev) => ({ 
            ...prev, 
            [name]: value
         }))
    }
    
    return (
        <>
            <div className="auth">
                <div className="auth-overlay"></div>
                <div className="auth-wrapper">
                    <form action="" className="auth-form">
                        <div className="auth-form-header">
                            <h3 className="auth-form-title">{ isLogin ? "Вход" : "Регистрация" }</h3>
                            <div className="auth-form-login" onClick={() => setIsLogin(!isLogin)}>
                                <img src="/logo-react.svg" alt="" width={30} height={30} />
                            </div>
                        </div>

                        {
                            isLogin ? 
                            <LoginField 
                                handleEventForm={HandleEventForm} 
                                loginValues={AuthValues} 
                            /> : 
                            <RegistrationField 
                                handleEventForm={HandleEventForm} 
                                registrationValues={AuthValues}
                            />
                        }        
                        
                        <button className="auth-form-btn" onClick={authRequest}>
                            {isLogin ? "Войти" : "Зарегистрироваться"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}