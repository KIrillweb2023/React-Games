import "./AsideApp.scss";
import { AsideRouters } from "../AsideRouters/AsideRouters";

export const AsideApp = () => {
    return (
        <>
            <div className="aside">
                <div className="aside-container">
                    <div className="aside-logo">
                        <img src="/logo-react.svg" className="aside-logo-text" alt="logotype" width={30} height={30} />
                    </div>
                    <ul className="aside-list">
                        <AsideRouters/>
                    </ul>

                    <div className="aside-accaunt">
                        <img src="/logo-react.svg" className="aside-accaunt-img" alt="logotype" width={30} height={30} />
                    </div>
                </div>
            </div>
        </>
    )
}