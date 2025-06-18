import { User, Portfolio, PortfolioGame } from "../models/models.js";

export class PortfolioController {
    async addGame(req, res) {
        try {
            const { userId, gameTitle, gameImage, gameDescr} = req.body; // body для POST

            const user = await User.findByPk(userId);
            if(!user) return res.status(403).json({ message: "Пользователь не найден!" });

            const [userPortfolio] = await Portfolio.findOrCreate({ where: { userId } });

            if(!userPortfolio) return res.status(400).json({ message: "Произошла ошибка с портфолио!" });

            const confirmGame = await PortfolioGame.findOne({
                where: {
                    portfolioId: userPortfolio.id,
                    gameTitle
                }
            });
            
            if(confirmGame) return res.status(400).json({ message: "Данная игра уже есть в портфолио!" });

            const newGame = await PortfolioGame.create({
                portfolioId: userPortfolio.id,
                gameTitle, gameImage, gameDescr
            });

            res.status(200).json({ message: "Игра добавленна в ваше портфолио", game: newGame });
        } catch (err) {
            console.log(err)
        }
    }

    async getAllGames(req, res) {
        try {
            const { userId } = req.params; // params для GET

            const portfolio = await Portfolio.findOne({ 
                where: { userId },
                include: [{
                    model: PortfolioGame,
                    as: 'games', 
                    attributes: [['id', 'gameId'], 'gameTitle', 'gameImage', 'gameDescr']
                }]
            });

            if (!portfolio) {
                return res.status(404).json({ message: "Портфолио не найдено" });
            }

            res.status(200).json(portfolio.games);
        } catch (err) {
            res.status(500).json({ message: "Ошибка получения игр!" })
        }

        
    }
    async deleteGame(req, res) {
        const { userId, gameId } = req.params;

        const userPortfolio = await Portfolio.findOne({ where: { userId } });
        if (!userPortfolio) {
            return res.status(404).json({ message: "Портфолио не найдено!" });
        }

        const gameToDelete = await PortfolioGame.findOne({
            where: {
                id: gameId,
                portfolioId: userPortfolio.id 
            }
        });

        if (!gameToDelete) {
            return res.status(404).json({ message: "Игра не найдена в вашем портфолио!" });
        }        

        await gameToDelete.destroy();

        return res.status(200).json({ message: "Игра успешно удалена из портфолио" });
    }
}