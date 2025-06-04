import "./RegistrationPage.scss";

export const RegistrationPage = () => {
    return (
        <>
            <div className="registration">
                <div className="registration-overlay"></div>
                <div className="registration-wrapper">
                    <form action="" className="registration-form">
                        <div className="registration-form-header">
                            <h3 className="registration-form-title">Регистрация</h3>
                            <div className="registration-form-login">
                                <img src="/logo-react.svg" alt="" width={30} height={30} />
                            </div>
                        </div>
                        <div className="registration-form-layout">
                            <img src="/logo-react.svg" width={25} height={25} alt="" className="registration-form-layout_icon"/>
                            <div className="registration-form-layout_contact">
                                <span>Ваш никнейм</span>
                                <input type="text" placeholder="Gamer-e4r45" />
                            </div>
                        </div>
                        <div className="registration-form-layout">
                            <img src="/logo-react.svg" width={25} height={25} alt="" className="registration-form-layout_icon"/>
                            <div className="registration-form-layout_contact">
                                <span>Ваша почта</span>
                                <input type="text" placeholder="example@mail.ru" />
                            </div>
                        </div>
                        <div className="registration-form-layout">
                            <img src="/logo-react.svg" width={25} height={25} alt="" className="registration-form-layout_icon"/>
                            <div className="registration-form-layout_contact">
                                <span>Ваш пароль</span>
                                <input type="text" placeholder="****wer" />
                            </div>
                        </div>
                        <div className="registration-form-layout">
                            <img src="/logo-react.svg" width={25} height={25} alt="" className="registration-form-layout_icon"/>
                            <div className="registration-form-layout_contact">
                                <span>Подтверждение пароля</span>
                                <input type="text" placeholder="****wer" />
                            </div>
                        </div>
                        <button className="registration-form-btn">
                            Зарегистрироваться
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}