import { GameCredentials, Games } from "../types/PortfolioGame.types";
import { $host } from "./index.api";

const AddGameApi = async (values: GameCredentials): Promise<GameCredentials[]> => {
    const { data } = await $host.post("/portfolio/addGame", { ...values })
    return data
}

const GetAllGamesApi = async (userId: number): Promise<Games[]> => {
    const { data } = await $host.get(`/portfolio/getAllGames/${userId}/games`);
    return data
}

export {
    AddGameApi, GetAllGamesApi
}