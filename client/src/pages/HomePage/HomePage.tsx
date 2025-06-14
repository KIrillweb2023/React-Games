import { Banner } from "../../components/Banner/Banner";
import { SliderMain } from "../../components/SliderMain/SliderMain"
import { Status } from "../../components/Status/Status";
import { TitlePages } from "../../components/TitlePages/TitlePages";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <>
            <TitlePages title="Главная" />
            <SliderMain/>
            <Banner/>
            <Status/>
        </>
    )
}

export default HomePage;