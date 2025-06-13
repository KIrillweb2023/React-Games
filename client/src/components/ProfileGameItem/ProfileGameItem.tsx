import "./ProfileGameItem.scss";

import ItemBgImage from "../../assets/Slider-bg/forzaMotorsport.png";

export const ProfileGameItem = () => {
    return (
        <>
            <div className="main-portfolio-games_item">
                <img className="main-portfolio-games_item-img" src={ItemBgImage} alt="forzahorizon" />
                <div className="main-portfolio-games_item-text">
                    <h5 className="name">Forza Horizon 5</h5>
                    <p className="subname">Аркадный симулятор гонок</p>
                    <p className="people">3544 человека, прошли игру</p>
                </div>
                <button className="main-portfolio-games_item-btn">Удалить из портфолио</button>
            </div>
        </>
    )
}