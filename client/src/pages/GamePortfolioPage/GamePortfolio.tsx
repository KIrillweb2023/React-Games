import { ProfileAside } from "../../components/ProfileAside/ProfileAside";
import { ProfileGameItem } from "../../components/ProfileGameItem/ProfileGameItem";
import { TitlePages } from "../../components/TitlePages/TitlePages"
import "./GamePortfolio.scss";

import AccauntIcon from "../../assets/AsideIcons/logoIcon/LogoReact.svg"
import { usePlayGamesReact } from "../../service/PlayGamesReact";
import { store } from "../../store/store";
import { useEffect, useState } from "react";
import { PortfolioStore } from "../../store/portfolio.store";
import { Games } from "../../types/PortfolioGame.types";


 const GamePortfolio = () => {
    const { GetGameAll } = usePlayGamesReact();
    const [myGames, setMyGames] = useState<Games[] | null>([])

    const { game, isLoading } = PortfolioStore();
    const { user } = store();

    const onRequest = async () => {
        await GetGameAll(user.id);

        if(!isLoading) {
            setMyGames(game)
        }

        console.log(myGames)
    }


    useEffect(() => {
       onRequest();
    }, []);

    const contentGame = 
    (isLoading || !myGames) ? 
    "Загрузка..." : 
    myGames.map((item) => (
        <ProfileGameItem key={item.id} gameImage={item.gameImage} gameTitle={item.gameTitle}/>
    ))

    return (
        <>
            <TitlePages title="Мое Game-портфолио"/>
            <div className="main-portfolio">
                <div className="main-portfolio-wrapper">
                    <ProfileAside/>
                    <div className="main-portfolio-games">
                        { contentGame }
                        <div className="main-portfolio-games_item reserve">
                            <img src={AccauntIcon} alt="" width={100} />
                            <h3 className="title-reserve">Ваши пройденные игры,</h3>
                            <p className="descr-reserve">влияют на вашу статистику</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default GamePortfolio