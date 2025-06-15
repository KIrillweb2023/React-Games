import { Router } from "express";
const PortfolioRouter = new Router();

import { PortfolioController } from "../controllers/portfolioController.js";
const { addGame } = new PortfolioController();

PortfolioRouter.post("/addGame", addGame);
// PortfolioRouter.get("/getGame")

export { PortfolioRouter }