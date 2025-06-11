import "./MainHeader.scss";
import { store } from "../../store/store";

export const MainHeader = () => {
    const { dataUser } = store();
    return (
        <>
            <div className="main-header">
                <h4 className="main-header-title">Welcome, {dataUser.user?.nikname} </h4>
                <div className="main-header-search">
                    <img src="/search.svg" alt="search" className="main-header-search_icon" width={40} height={40}/>
                    <input placeholder="Search game" type="text" className="main-header-search_input"/>
                </div>

                <div className="main-header-notify">
                    <img src="/notify.svg" alt="notify" className="main-header-notify_icon" width={30} height={30} />
                </div>
            </div>
        </>
    )
}