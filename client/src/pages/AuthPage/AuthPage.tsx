import { ChangeEvent, useState } from "react";
import { LoginField } from "../../components/LoginField/LoginField";
import { RegistrationField } from "../../components/RegistrationField/RegistrationField";
import { AuthLayoutValue } from "../../types/AuthenficateProps.types";
import { store } from "../../store/store";
import "./AuthPage.scss";

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const { dataUser, isLoginAuth, isRegistrationAuth } = store();

   
    const [AuthValues, setAuthValues] = useState<AuthLayoutValue>({
        email: "", password: "", nikname: ""
    })

    const HandleEventForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setAuthValues((prev) => ({ 
            ...prev, 
            [name]: value
         }))
    }
    
    const SendBase = async (e: React.FormEvent): Promise<void> => {
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
            console.log(dataUser)

            setAuthValues((prev) => ({ email: "", nikname: "", password: "" }))

            console.log(dataUser)
        } catch(err: any) {
            alert(err.responce.data.message)
        }
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
                        
                        <button className="auth-form-btn" onClick={SendBase}>
                            {isLogin ? "Войти" : "Зарегистрироваться"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}