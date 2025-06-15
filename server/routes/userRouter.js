import { Router } from "express";
const UserRoute = new Router();
import { UserController } from "../controllers/userController.js";
const userControllerClass = new UserController()

import { ValidateTokenUser } from "../middleware/authMiddleware.js";
const { validateToken } = new ValidateTokenUser();

UserRoute.post("/user/registration", userControllerClass.registration)
UserRoute.post("/user/login", userControllerClass.login)
UserRoute.get("/user/auth", validateToken, userControllerClass.auth)

export {
    UserRoute
}