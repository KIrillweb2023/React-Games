import { User, Portfolio, PortfolioGame } from "../models/models.js";

export class PortfolioController {
    async addGame(req, res) {
        try {
            const { userId, gameTitle, gameImage, gameDescr} = req.body;

            const user = await User.findByPk(userId);
            if(!user) return res.status(403).json({ message: "Пользователь не найден!" });

            const [portfolio] = await Portfolio.findOrCreate({
                where: { userId },
                defaults: { userId }
            });

            const GamePortfolio = await PortfolioGame.create({
                portfolioId: portfolio.id,
                gameTitle, gameImage, gameDescr
            });

            res.status(200).json({ message: "Игра добавленна в ваше портфолио" + GamePortfolio });
        } catch (err) {
            console.log(err)
        }
    }
}