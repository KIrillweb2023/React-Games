import { create } from "zustand";
import { PortfolioGameAction, PortfolioGameState } from "../types/PortfolioGame.types";
import { AddGameApi, GetAllGamesApi } from "../api/portfolio.api";

export const PortfolioStore = create<PortfolioGameState & PortfolioGameAction>((set) => ({
    game: null,
    isLoading: false,
    isError: null,
    
    resetGameState: () => {
        set({ game: null, isLoading: false, isError: null });
    },

    AddGame: async ({ userId, gameTitle, gameDescr, gameImage }) => {
        try {
            set({ isLoading: true, isError: null });

            const response = await AddGameApi({ userId, gameTitle, gameImage, gameDescr });
            set({ game: response, isLoading: false })
        
        } catch (err: any) {
            set({ isLoading: false, isError: err.message || 'Failed to add game' });
            throw err;
        }
    },
    
    getAllGame: async (userId: number) => {
        try {
            set({ isLoading: true, isError: null });

            const response = await GetAllGamesApi(userId);

            set({ game: response, isLoading: false });
        } catch (err: any) {
            set({ isLoading: false, isError: err.message || 'Failed to fetch games' });
            throw err;
        }
    }
}))