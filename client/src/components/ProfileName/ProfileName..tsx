import "./ProfileName.scss";

import AccauntIcon from "../../assets/AsideIcons/logoIcon/LogoReact.svg"


export const ProfileName = () => {
    return (
        <>
            <div className="main-portfolio-profile_info">
                <img src={AccauntIcon} alt="" className="main-portfolio-profile_img" width={60} height={60}/>
                <div className="main-portfolio-profile_text">
                    <h4 className="main-portfolio-profile_name">1Win</h4>
                    <p className="main-portfolio-profile_stage">Новичок</p>
                </div>
            </div>
        </>
    )
}