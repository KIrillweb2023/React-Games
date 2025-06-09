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
                        {/* <h5 className="main-portfolio-games_title">
                            Список моих игр
                        </h5> */}
                        <ProfileGameItem/>
                        <div className="main-portfolio-games_item reserve">
                            <img src="/logo-react.svg" alt="" width={100} />
                            <h3 className="title-reserve">Ваши пройденные игры,</h3>
                            <p className="descr-reserve">влияют на вашу статистику</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}