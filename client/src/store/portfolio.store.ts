import { create } from "zustand";
import { PortfolioGameStore } from "../types/PortfolioGame.types";
import { AddGameApi } from "../api/portfolio.api";

export const PortfolioStore = create<PortfolioGameStore>((set) => ({
    dataGame: {
        game: null,
        isLoading: false,
        isError: null
    },

    useAddGame: async ({ userId, gameTitle, gameDescr, gameImage }) => {
        try {
            set((state) => ({ dataGame: { ...state.dataGame, isLoading: true, isError: null } }))

            const response = await AddGameApi({ userId, gameTitle, gameImage, gameDescr });
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    // useGetGame: async () => {}
}))