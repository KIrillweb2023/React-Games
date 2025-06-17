import "./AsideApp.scss";
import { AsideRouters } from "../AsideRouters/AsideRouters";

import LogoReact from "../../assets/AsideIcons/logoIcon/LogoReact.svg";
import ArrowDown from "../../assets/AsideIcons/arrow-bottom.svg";
import { useState } from "react";

export const AsideApp = () => {
    const [isDisable, setIsDisable] = useState(false);

    const isToogleAside = () => {
        setIsDisable(!isDisable)
    }

    return (
        <>
            <div className={`aside ${ isDisable ? "aside-disable" : "" }`}>
                <div className="aside-container">
                    <div className="aside-logo" onClick={isToogleAside}>
                        <img src={ArrowDown} className="aside-logo-icon" alt="logotype" width={30} height={30} />
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