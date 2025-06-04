import "./ProfileProgress.scss";

export const ProfileProgress = () => {
    return (
        <>
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
        </>
    )
}