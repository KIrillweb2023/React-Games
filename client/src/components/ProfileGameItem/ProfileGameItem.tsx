import "./ProfileGameItem.scss";
import { usePlayGamesReact } from "../../service/PlayGamesReact";
import { store } from "../../store/store";

import DeleteIcon from "../../assets/trash.svg";

export const ProfileGameItem = ({gameId, gameTitle, gameImage }: { gameId: number, gameTitle: string, gameImage: string }) => {
    const { DeleteGames } = usePlayGamesReact();
    const {user} = store();
    return (
        <>
            <div className="main-portfolio-games_item" style={{ background: `url(${gameImage}) center center / cover` }}>
                <div className="main-portfolio-games_item-text">
                    <h5 className="name">{gameTitle}</h5>
                    <p className="subname">Аркадный симулятор гонок</p>
                    <p className="people">3544 человека, прошли игру</p>
                </div>
                <button className="main-portfolio-games_item-btn" onClick={() => DeleteGames(user.id, gameId)}>
                    <img src={DeleteIcon} alt="" width={25} height={25} />
                </button>
            </div>
        </>
    )
}