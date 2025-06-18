import React, { useState } from "react";
import { MAIN_APP_ROUTES } from "../routes/routes";
import { store } from "../store/store";
import { PortfolioStore } from "../store/portfolio.store";
import { AuthCredentials } from "../types/AuthenficateProps.types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GameCreateData } from "../types/PortfolioGame.types";

const API_SLIDER_URL = "https://dd48abe606c02835.mokky.dev/SliderItems";


export const usePlayGamesReact = () => {
    const { isLoginAuth, isRegistrationAuth } = store();
    const { addGame, getAllGames, deleteGame } = PortfolioStore();
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const [AuthValues, setAuthValues] = useState<AuthCredentials>({
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

            // setTimeout(() => {
                setLoader(false)
            // }, 2000)
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    const usePortfolioGame = async (values: GameCreateData): Promise<any> => {
        try {
            await addGame({ ...values })
        } catch (err) {
            console.log(err)
        }
    }

    const GetGameAll = async (userId: number) => {
        try {
            await getAllGames(userId);
        } catch (err) {
            console.log(err)
        }
    }


    const DeleteGames = async (userId: number, gameId: number) => {
        try {
            await deleteGame({userId, gameId});
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
        usePortfolioGame,
        GetGameAll,
        DeleteGames
    }
}