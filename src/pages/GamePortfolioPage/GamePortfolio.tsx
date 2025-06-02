import { TitlePages } from "../../components/TitlePages/TitlePages"
import "./GamePortfolio.scss";
export const GamePortfolio = () => {

    return (
        <>
            <TitlePages title="Мое Game-портфолио"/>
            <div className="main-portfolio">
                <div className="main-portfolio-wrapper">
                    <div className="main-portfolio-profile">
                        <div className="main-portfolio-profile_info">
                            <img src="/logo-react.svg" alt="" className="main-portfolio-profile_img" width={60} height={60}/>
                            <div className="main-portfolio-profile_text">
                                <h4 className="main-portfolio-profile_name">1Win</h4>
                                <p className="main-portfolio-profile_stage">Новичок</p>
                            </div>
                        </div>
                        
                        <div className="main-portfolio-profile_progress">
                            <h5 className="main-portfolio-profile_titleProgress">Ваш прогресс:</h5>
                            <div className="main-portfolio-profile_line">
                                <div className="main-portfolio-profile_subline"></div>
                            </div>
                            <div className="main-portfolio-profile_count">
                                <span className="prev">0</span>
                                <span className="next">1</span>
                            </div>
                        </div>
                    </div>
                    <div className="main-portfolio-games">
                        <h5 className="main-portfolio-games_title">
                            Список моих игр
                        </h5>
                        <div className="main-portfolio-games_item">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}