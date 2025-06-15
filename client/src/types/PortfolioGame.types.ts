export interface PortfolioGameType {
    userId?: number;
    gameTitle: string;
    gameImage: string;
    gameDescr: string;
}

type Game = Omit<PortfolioGameType, "userId"> 

export interface PortfolioGameStore {
    dataGame: {
        game: Game | null;
        isLoading: boolean;
        isError: string | null;
    }, 
    useAddGame: (credentials: PortfolioGameType) => void;
}