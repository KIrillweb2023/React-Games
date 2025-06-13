import { LoginFieldProps } from "../../types/AuthenficateProps.types";

import ReactLogo from "../../assets/AsideIcons/logoIcon/LogoReact.svg";


export const LoginField: React.FC<LoginFieldProps> = ({ handleEventForm, loginValues }) => {
    return (
        <>
            <div className="auth-form-layout">
                <img src={ReactLogo} width={25} height={25} alt="" className="auth-form-layout_icon"/>
                <div className="auth-form-layout_contact">
                    <span>Ваша почта</span>
                    <input 
                    type="text" 
                    placeholder="example@mail.ru" 
                    name="email"
                    value={loginValues.email} 
                    onChange={handleEventForm}/>
                </div>
            </div>
            <div className="auth-form-layout">
                <img src={ReactLogo} width={25} height={25} alt="" className="auth-form-layout_icon"/>
                <div className="auth-form-layout_contact">
                    <span>Ваш пароль</span>
                    <input 
                    type="text" 
                    placeholder="****wer" 
                    name="password"
                    value={loginValues.password}
                    onChange={handleEventForm} />
                </div>
            </div>
        </>
    )
}