import "./AsideApp.scss";
import { AsideRouters } from "../AsideRouters/AsideRouters";

import LogoReact from "../../assets/AsideIcons/logoIcon/LogoReact.svg";

export const AsideApp = () => {
    return (
        <>
            <div className="aside">
                <div className="aside-container">
                    <div className="aside-logo">
                        <img src={LogoReact} className="aside-logo-text" alt="logotype" width={30} height={30} />
                    </div>
                    <ul className="aside-list">
                        <AsideRouters/>
                    </ul>

                    <div className="aside-accaunt">
                        <img src={LogoReact} className="aside-accaunt-img" alt="logotype" width={30} height={30} />
                    </div>
                </div>
            </div>
        </>
    )
}