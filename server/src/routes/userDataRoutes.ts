import { Router } from "express";
import userDataController from "../controllers/userDataController";

const userDataRouter = Router();

userDataRouter.post("/register", userDataController.StoreUserData);

userDataRouter.get("/retrieve", userDataController.RetreiveUserData);

userDataRouter.put("/update", userDataController.UpdateUserData);

export default userDataRouter;
