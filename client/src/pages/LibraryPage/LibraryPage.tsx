import { Swiper, SwiperSlide } from "swiper/react"

import "./LibraryPage.scss";
import { LibraryItem } from "../../components/LibraryItem/LibraryItem";
import { CatalogItemsData } from "./data/Catalog-data";

const LibraryPage = () => {
    return (
        <>
            <div className="main-library">
                <div className="main-library-catalog">
                    <Swiper slidesPerView={8.3} spaceBetween={10} className="main-library-catalog_slider">
                        {
                            CatalogItemsData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="main-library-catalog_item">
                                        <p className="main-library-catalog_item-text">
                                            { item.tabText }
                                        </p>
                                    </SwiperSlide>
                                )
                            })
                        }
                        
                       
                    </Swiper>
                </div>

                <div className="main-library-games">
                    <LibraryItem/>
                    <LibraryItem/>
                    <LibraryItem/>
                </div>

            </div>
        </>
    )
}

export default LibraryPage;