import { Router } from "express";
import authController from "../controllers/authController";

const authRouter = Router();

authRouter.post("/login", authController.LoginController);

authRouter.post("/logout", authController.LogoutController);

authRouter.post("/signup", authController.SignUpController);

export default authRouter;
