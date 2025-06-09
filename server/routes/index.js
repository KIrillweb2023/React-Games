import { Router } from "express";
const router = new Router();



import { UserRoute } from "./userRouter.js";

router.use("/user", UserRoute)

export {
    router
}