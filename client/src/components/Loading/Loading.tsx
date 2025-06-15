import LoaderIcon from "../../assets/SpinnerSVG/tube-spinner.svg";
import "./Loading.scss";

export const Loading = () => {
    return (
        <>
            <div className="loader">
                <img className="loader-icon" src={LoaderIcon} alt="loader" width={ 150 }/>
                <h3 className="loader-text">Идет загрузка... <br/> Пожайлуста подождите!</h3>
            </div>
        </>
    )
}