import "./Status.scss";

import UsersIcon from "../../assets/MainStatusBarIcon/users.svg"
import UsersOnlineIcon from "../../assets/MainStatusBarIcon/userOnline.svg"
import StatusIcon from "../../assets/MainStatusBarIcon/status.svg"

export const Status = () => {
    return (
        <>
            <div className="main-status">
                <div className="main-status-wrapper">

                    <div className="main-status-item">
                        <div className="main-status-item_icon">
                            <img src={StatusIcon} alt="status" width={50} height={50} />
                        </div>
                        <div className="main-status-item_text">
                            <h4>345</h4>
                            <p>Игр на платформе</p>
                        </div>
                    </div>
                    <div className="main-status-item">
                        <div className="main-status-item_icon">
                            <img src={UsersIcon} alt="status" width={50} height={50} />
                        </div>
                        <div className="main-status-item_text">
                            <h4>1244</h4>
                            <p>Людей зарегистрированных на платформе</p>
                        </div>
                    </div>
                    <div className="main-status-item">
                        <div className="main-status-item_icon">
                            <img src={UsersOnlineIcon} alt="status" width={50} height={50} />
                        </div>
                        <div className="main-status-item_text">
                            <h4>13245</h4>
                            <p>Людей онлайн на платформе</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}