    export interface PortfolioGameType {
        userId?: number;
        id?: number;
        gameTitle: string;
        gameImage: string;
        gameDescr: string;
    }

export interface Game extends PortfolioGameType {}
export type Games = Omit<PortfolioGameType, "userId">

export type GameCredentials = Omit<Game, "id">

export interface PortfolioGameState {
    game: Games[] | null;
    isLoading: boolean;
    isError: string | null;
}

export interface PortfolioGameAction {
    AddGame: (gameData: GameCredentials) => Promise<void>;
    getAllGame: (userId: number) => Promise<void>;
    resetGameState: () => void
}