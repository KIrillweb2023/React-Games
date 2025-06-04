import "./ProfileStars.scss";

export const ProfileStars = () => {
    return (
        <>
            <div className="main-portfolio-profile_stars">
                <div className="main-portfolio-profile_stars-icon">
                    <img src="/star.svg" alt="" width={40} />
                </div>
                
                <div className="main-portfolio-profile_stars-text">
                    <span>Кол-во ваших звезд:</span>
                    <h4>0</h4>
                </div>
            </div>
        </>
    )
}