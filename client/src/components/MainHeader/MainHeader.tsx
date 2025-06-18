import "./MainHeader.scss";
// import { store } from "../../store/store";

import { AsideRouters } from "../AsideRouters/AsideRouters";

export const MainHeader = () => {
    // const { user } = store();
    return (
        <>
            <div className="main-header">
                <h4 className="main-header-company">
                    <span>eX</span>
                    Game
                </h4>

                <div className="main-header-list">
                    <AsideRouters/>
                </div>


                <div className="main-header-auth">
                    <button className="main-header-auth_btn singup">Sing up</button>
                    <button className="main-header-auth_btn login">Log in</button>
                </div>

            </div>
        </>
    )
}