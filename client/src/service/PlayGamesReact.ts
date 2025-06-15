import React, { useState } from "react";
import { MAIN_APP_ROUTES } from "../routes/routes";
import { store } from "../store/store";
import { PortfolioStore } from "../store/portfolio.store";
import { AuthLayoutValue } from "../types/AuthenficateProps.types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PortfolioGameType } from "../types/PortfolioGame.types";

const API_SLIDER_URL = "https://dd48abe606c02835.mokky.dev/SliderItems";


export const usePlayGamesReact = () => {
    const { isLoginAuth, isRegistrationAuth } = store();
    const { useAddGame } = PortfolioStore();
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const [AuthValues, setAuthValues] = useState<AuthLayoutValue>({
        email: "", password: "", nikname: ""
    })

    const authRequest = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();

        try {
            if(isLogin) {
                await isLoginAuth({ 
                    email: AuthValues.email, 
                    password: AuthValues.password 
                })
            } else {
                await isRegistrationAuth({ ...AuthValues })
            }

            setAuthValues(({ email: "", nikname: "", password: "" }))

            navigate(MAIN_APP_ROUTES.HOME_PAGE)
        } catch(err: any) {
            navigate(MAIN_APP_ROUTES.AUTH_PAGE)
        }
            
    }

    const getGamesSlider = async () => {
        setLoader(true)
        try {
            const { data } = await axios.get(API_SLIDER_URL);

            setTimeout(() => {
                setLoader(false)
            }, 2000)
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    const usePortfolioGame: React.FC<PortfolioGameType> = async (values): Promise<any> => {
        try {
            await useAddGame({ ...values })

        } catch (err) {
            console.log(err)
        }
    }

    return {
        authRequest, 
        setAuthValues, 
        isLogin, 
        AuthValues, 
        setIsLogin, 
        getGamesSlider, 
        loader,
        usePortfolioGame
    }
}