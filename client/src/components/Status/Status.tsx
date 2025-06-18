import "./Status.scss";

import UsersOnlineIcon from "../../assets/MainStatusBarIcon/userOnline.svg"
import AllGames from "../../assets/MainStatusBarIcon/allgame.svg";
import UsersApp from "../../assets/MainStatusBarIcon/usersPlatform.svg"

export const Status = () => {
    return (
        <>
            <div className="main-status">
                 <h2 className="main-status-title">Why exGame?</h2>
                    <p className="main-status-subtitle">Почему же стоит попробывать эту платформу и в чем же ее плюсы?</p>
                <div className="main-status-wrapper">
                   
                    <div className="main-status-item">
                        <img className="main-status-item_icon" src={AllGames} alt="status" width={100} height={100} />
                        <div className="main-status-item_text">
                            <h4>345</h4>
                            <p>Видео-игр добавленных в эту платформу</p>
                        </div>
                    </div>
                    <div className="main-status-item">
                        <img className="main-status-item_icon" src={UsersApp} alt="status" width={100} height={100} />
                        <div className="main-status-item_text">
                            <h4>1244</h4>
                            <p>Людей находится зарегистрированными на этой платформе</p>
                        </div>
                    </div>
                    <div className="main-status-item">
                        <img className="main-status-item_icon" src={UsersOnlineIcon} alt="status" width={100} height={100} />
                        <div className="main-status-item_text">
                            <h4>13245</h4>
                            <p>Количество людей онлайн на платформе</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}