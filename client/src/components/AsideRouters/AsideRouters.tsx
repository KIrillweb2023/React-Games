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
                        <li key={index} className={`main-header-list-item ${item.path === locate.pathname ? "main-header-list-item_active" : ""} `}>
                            <Link to={item.path}>
                                {/* <img src={item.sourceImage} alt={item.altImage} width={25} height={25} /> */}
                                <h3>{item.pageName}</h3>
                            </Link>
                        </li>
                    )
                })
            }
        </>
    )
}