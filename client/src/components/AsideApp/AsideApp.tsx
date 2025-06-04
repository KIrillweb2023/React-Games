import { Link, useLocation } from "react-router-dom"
// import ROUTES from "../../routes/ro"
// import routes from "../../routes/routes"
import { routes } from "../../routes/routes";
import "./AsideApp.scss";

export const AsideApp = () => {
    const locate = useLocation();
    console.log(locate.pathname)
    return (
        <>
            <div className="aside">
                <div className="aside-container">
                    <div className="aside-logo">
                        <img src="/logo-react.svg" className="aside-logo-text" alt="logotype" width={30} height={30} />
                    </div>
                    <ul className="aside-list">
                        {
                            routes.map((item, index) => {
                                return (
                                    <li key={index} className={`aside-list-item ${item.path === locate.pathname ? "aside-list-item_active" : ""} `}>
                                        <Link to={item.path}>
                                            <img src={item.sourceImage} alt={item.altImage} width={30} height={30} />
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="aside-accaunt">
                        <img src="/logo-react.svg" className="aside-accaunt-img" alt="logotype" width={30} height={30} />
                    </div>
                </div>
            </div>
        </>
    )
}