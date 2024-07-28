import { Router } from "express";
import userDataController from "../controllers/userDataController";

const userDataRouter = Router();

userDataRouter.post("/", userDataController.StoreUserData);

userDataRouter.get("/", userDataController.RetrieveUserData);

userDataRouter.put("/", userDataController.UpdateUserData);

userDataRouter.delete("/", userDataController.DeleteUserData);

export default userDataRouter;
