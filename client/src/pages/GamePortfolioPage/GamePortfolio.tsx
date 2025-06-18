import { ProfileAside } from "../../components/ProfileAside/ProfileAside";
import { ProfileGameItem } from "../../components/ProfileGameItem/ProfileGameItem";
import "./GamePortfolio.scss";
import { usePlayGamesReact } from "../../service/PlayGamesReact";
import { store } from "../../store/store";
import { useEffect } from "react";
import { PortfolioStore } from "../../store/portfolio.store";

const GamePortfolio = () => {
    const { GetGameAll } = usePlayGamesReact();

    const { games, isLoading } = PortfolioStore();
    const { user } = store();

    const onRequest = async () => {
        await GetGameAll(user.id);
    }


    useEffect(() => {
       onRequest();
    }, []);

    const contentGame = (isLoading || !games) ? "Загрузка..." : 
    games.map((item) => (
        <ProfileGameItem key={item.gameId} gameId={item.gameId} gameImage={item.gameImage} gameTitle={item.gameTitle}/>
    ))

    return (
        <div className="main-portfolio">
            <div className="main-portfolio-wrapper">
                <ProfileAside />
                
                <div className="main-portfolio-games">
                    {contentGame}
                </div>
            </div>
        </div>
    );
};

export default GamePortfolio;