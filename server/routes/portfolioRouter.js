import { Router } from "express";
const PortfolioRouter = new Router();

import { PortfolioController } from "../controllers/portfolioController.js";
const { addGame, getAllGames, deleteGame } = new PortfolioController();

PortfolioRouter.post("/addGame", addGame);
PortfolioRouter.get("/getAllGames/:userId/games", getAllGames)
PortfolioRouter.delete("/:userId/games/:gameId", deleteGame)

export { PortfolioRouter }