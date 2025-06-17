import "./MainHeader.scss";
import { store } from "../../store/store";

import SearchIcon from "../../assets/MainHeaderIcon/search.svg";
import NotifyIcon from "../../assets/MainHeaderIcon/notify.svg";

export const MainHeader = () => {
    const { user } = store();
    return (
        <>
            <div className="main-header">
                <h4 className="main-header-title">Welcome, {user?.nikname} </h4>
                <div className="main-header-search">
                    <img src={SearchIcon} alt="search" className="main-header-search_icon" width={40} height={40}/>
                    <input placeholder="Search game" type="text" className="main-header-search_input"/>
                </div>

                <div className="main-header-notify">
                    <img src={NotifyIcon} alt="notify" className="main-header-notify_icon" width={30} height={30} />
                </div>
            </div>
        </>
    )
}