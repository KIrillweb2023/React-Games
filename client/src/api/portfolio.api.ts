import { $host } from "./index.api";
import {
  GameCreateData,
  GameResponse,
  GamesList,
  DeleteGameParams
} from "../types/PortfolioGame.types";

const addGameApi = async (values: GameCreateData): Promise<GameResponse> => {
  const { data } = await $host.post<GameResponse>("/portfolio/addGame", values);
  return data;
};

const getAllGamesApi = async (userId: number): Promise<GamesList> => {
  const { data } = await $host.get<GamesList>(`/portfolio/getAllGames/${userId}/games`);
  return data;
};

const deleteGameApi = async (params: DeleteGameParams): Promise<void> => {
  await $host.delete(`/portfolio/${params.userId}/games/${params.gameId}`);
};

export {
    addGameApi, getAllGamesApi, deleteGameApi
}