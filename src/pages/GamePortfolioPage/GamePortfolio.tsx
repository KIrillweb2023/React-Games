import { ProfileAside } from "../../components/ProfileAside/ProfileAside";
import { ProfileGameItem } from "../../components/ProfileGameItem/ProfileGameItem";
import { TitlePages } from "../../components/TitlePages/TitlePages"
import "./GamePortfolio.scss";
export const GamePortfolio = () => {

    return (
        <>
            <TitlePages title="Мое Game-портфолио"/>
            <div className="main-portfolio">
                <div className="main-portfolio-wrapper">
                    <ProfileAside/>
                    <div className="main-portfolio-games">
                        <h5 className="main-portfolio-games_title">
                            Список моих игр
                        </h5>
                        <ProfileGameItem/>
                    </div>
                </div>
            </div>
        </>
    )
}