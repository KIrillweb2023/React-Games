import { RegistrationFieldProps } from "../../types/AuthenficateProps.types"

export const RegistrationField: React.FC<RegistrationFieldProps> = ({handleEventForm, registrationValues}) => {
    return (
        <>
            <div className="auth-form-layout">
                <img src="/logo-react.svg" width={25} height={25} alt="" className="auth-form-layout_icon"/>
                <div className="auth-form-layout_contact">
                    <span>Ваш никнейм</span>
                    <input 
                    type="text" 
                    placeholder="Gamer-e4r45"
                    name="nikname"
                    value={registrationValues.nikname}
                    onChange={handleEventForm} />
                </div>
            </div>
            <div className="auth-form-layout">
                <img src="/logo-react.svg" width={25} height={25} alt="" className="auth-form-layout_icon"/>
                <div className="auth-form-layout_contact">
                    <span>Ваша почта</span>
                    <input 
                    type="text" 
                    placeholder="example@mail.ru" 
                    name="email"
                    value={registrationValues.email} 
                    onChange={handleEventForm}/>
                </div>
            </div>
            <div className="auth-form-layout">
                <img src="/logo-react.svg" width={25} height={25} alt="" className="auth-form-layout_icon"/>
                <div className="auth-form-layout_contact">
                    <span>Ваш пароль</span>
                    <input 
                    type="text" 
                    placeholder="****wer" 
                    name="password"
                    value={registrationValues.password}
                    onChange={handleEventForm} />
                </div>
            </div>
            <div className="auth-form-layout">
                <img src="/logo-react.svg" width={25} height={25} alt="" className="auth-form-layout_icon"/>
                <div className="auth-form-layout_contact">
                    <span>Подтверждение пароля</span>
                    <input type="text" placeholder="****wer" />
                </div>
            </div>
        </>
    )
}