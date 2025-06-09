import { routes } from "../../routes/routes";
import { Link, useLocation } from "react-router-dom";
import { RoutesTypes } from "../../types/Routes.types";
import "./AsideRouters.scss";

export const AsideRouters = () => {
    const locate = useLocation();
    
    return (
        <>
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
        </>
    )
}