import { Swiper, SwiperSlide } from 'swiper/react';
import "./SliderMain.scss"

import Star from "../../assets/Slider-bg/IconsItemSlide/star.svg"
import Add from "../../assets/Slider-bg/IconsItemSlide/add.svg"
import { useEffect, useState } from 'react';
import { usePlayGamesReact } from '../../service/PlayGamesReact';

import { store } from '../../store/store';
import { GameCredentials } from '../../types/PortfolioGame.types';

export const SliderMain = () => {
    const [gamesSlide, setGamesSlide] = useState<any[]>([]);

    const { user } = store();

    const { getGamesSlider, usePortfolioGame } = usePlayGamesReact();

    const GetResponseSlide = () => {
        getGamesSlider().then(data => setGamesSlide(data))
    }
    
    const SubmitGame = async (values: GameCredentials) => {
        await usePortfolioGame({ ...values })
    }   

    useEffect(() => {
        GetResponseSlide()
    }, [])

    return (
        <Swiper spaceBetween={30} slidesPerView={2.2} loop={true} className='swiper-wrapper'>
            {
                gamesSlide.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='swiper-slide-content'>
                                <img src={item.slide_image} alt="image" className='swiper-slide-bg' />
                                <div className='swiper-slide-block'>
                                    <h3 className='swiper-slide-title'>{item.slide_title}</h3>
                                    <p className='swiper-slide-descr'>{item.slide_descr}</p>

                                    <div className='swiper-slide-buttons'>
                                        <button className='swiper-slide-btn'>Перейти</button>
                                        
                                        <button className='swiper-slide-btnAdd' onClick={() => SubmitGame({ userId: user.id, gameTitle: item.slide_title, gameImage: item.slide_image, gameDescr: item.slide_descr })}>
                                            <img src={Add} alt="add" />
                                            <p className='swiper-slide-btnAdd_text'>Добавить в Game-портфолио</p>
                                        </button>

                                        <div className='swiper-slide-rating'>
                                            <p className='swiper-slide-rating_text'>+10</p>
                                            <img className='swiper-slide-rating_icon' src={Star} alt="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}