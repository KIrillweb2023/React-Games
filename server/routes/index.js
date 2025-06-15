import { Router } from "express";
const router = new Router();

import { UserRoute } from "./userRouter.js";
import { PortfolioRouter } from "./portfolioRouter.js";

router.use("/api", UserRoute)
router.use("/portfolio", PortfolioRouter)

export {
    router
}