import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import "./SliderMain.scss"
import { slider_data } from './data/slider';



export const SliderMain = () => {
    return (
      
        <div className="myswiper">
            <Swiper
                spaceBetween={30}
                slidesPerView={2.2}
                loop={true}
                className='swiper-wrapper'
            >
                {
                    slider_data.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='swiper-slide-content'>
                                    <img src={item.Image_Slide} alt="image" className='swiper-slide-bg' />
                                    <div className='swiper-slide-block'>
                                        <h3 className='swiper-slide-title'>{item.Title_Slide}</h3>
                                        <p className='swiper-slide-descr'>{item.Descr_Slide}</p>

                                        <div className='swiper-slide-buttons'>
                                            <button className='swiper-slide-btn'>Перейти</button>
                                            <button className='swiper-slide-btnAdd'>
                                                <img src="/add.svg" alt="add" />
                                                <p className='swiper-slide-btnAdd_text'>Добавить в Game-портфолио</p>
                                               
                                            </button>
                                            <div className='swiper-slide-rating'>
                                                <p className='swiper-slide-rating_text'>+10</p>
                                                <img className='swiper-slide-rating_icon' src="/star.svg" alt="star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                
        </Swiper>
        </div>
       
    )
}