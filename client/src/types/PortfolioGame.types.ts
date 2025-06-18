export interface PortfolioGame {
    gameId: number;
    userId: number;
    gameTitle: string;
    gameImage: string;
    gameDescr: string;
}

// Типы для операций
export type GameCreateData = Omit<PortfolioGame, 'gameId'>;
export type GameResponse = Omit<PortfolioGame, 'userId'>;
export type GamesList = GameResponse[];
export type DeleteGameParams = Pick<PortfolioGame, 'userId' | 'gameId'>;

// Состояние хранилища
export interface PortfolioGameState {
    games: GamesList | null;
    isLoading: boolean;
    isError: string | null;
}

// Действия хранилища
export interface PortfolioGameActions {
    addGame: (gameData: GameCreateData) => Promise<void>;
    getAllGames: (userId: number) => Promise<void>;
    deleteGame: (params: DeleteGameParams) => Promise<void>;
    resetState: () => void;
}