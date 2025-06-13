import "./ProfileStars.scss";

import StarIcon from "../../assets/Slider-bg/IconsItemSlide/star.svg";

export const ProfileStars = () => {
    return (
        <>
            <div className="main-portfolio-profile_stars">
                <div className="main-portfolio-profile_stars-icon">
                    <img src={StarIcon} alt="" width={40} />
                </div>
                
                <div className="main-portfolio-profile_stars-text">
                    <span>Кол-во ваших звезд:</span>
                    <h4>0</h4>
                </div>
            </div>
        </>
    )
}