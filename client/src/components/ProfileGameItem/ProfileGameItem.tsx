import "./ProfileGameItem.scss";

export const ProfileGameItem = ({ gameTitle, gameImage }: { gameTitle: string, gameImage: string }) => {
    return (
        <>
            <div className="main-portfolio-games_item">
                <img className="main-portfolio-games_item-img" src={gameImage} alt="forzahorizon" />
                <div className="main-portfolio-games_item-text">
                    <h5 className="name">{gameTitle}</h5>
                    <p className="subname">Аркадный симулятор гонок</p>
                    <p className="people">3544 человека, прошли игру</p>
                </div>
                <button className="main-portfolio-games_item-btn">Удалить из портфолио</button>
            </div>
        </>
    )
}