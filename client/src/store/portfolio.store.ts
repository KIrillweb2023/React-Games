import { create } from "zustand";
import { PortfolioGameActions, PortfolioGameState } from "../types/PortfolioGame.types";
import { addGameApi, deleteGameApi, getAllGamesApi } from "../api/portfolio.api";


export const PortfolioStore = create<PortfolioGameState & PortfolioGameActions>((set) => ({
    games: null,
    isLoading: false,
    isError: null,
    
    resetState: () => {
        set({ games: null, isLoading: false, isError: null });
    },

    addGame: async ({ userId, gameTitle, gameImage, gameDescr }) => {
        try {
            set({ isLoading: true, isError: null });

            const newGame = await addGameApi({ 
                userId, 
                gameTitle, 
                gameImage, 
                gameDescr 
            });

            set((state) => ({
                games: state.games ? [...state.games, newGame] : [newGame],
                isLoading: false
            }));
        
        } catch (err: unknown) {
            const error = err instanceof Error ? err.message : 'Failed to add game';
            set({ isLoading: false, isError: error });
            throw err;
        }
    },
    
    getAllGames: async (userId) => {
        try {
            set({ isLoading: true, isError: null });

            const games = await getAllGamesApi(userId);
            set({ games, isLoading: false });

        } catch (err: unknown) {
            const error = err instanceof Error ? err.message : 'Failed to fetch games';
            set({ isLoading: false, isError: error });
            throw err;
        }
    },

    deleteGame: async ({ userId, gameId }) => {
        try {
            set({ isLoading: true, isError: null });

            await deleteGameApi({ userId, gameId });
            
            set((state) => ({
                games: state.games?.filter(game => game.gameId !== gameId) ?? null,
                isLoading: false
            }));

        } catch (err: unknown) {
            const error = err instanceof Error ? err.message : 'Failed to delete game';
            set({ isLoading: false, isError: error });
            throw err;
        }
    }
}));