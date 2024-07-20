import { Router } from "express";
import cartController from "../controllers/cartController";

const cartRouter = Router();

cartRouter.post("/", cartController.StoreCartData);

cartRouter.put("/", cartController.UpdateCartData);

cartRouter.get("/", cartController.RetrieveCartData);

cartRouter.delete("/", cartController.DeleteCartData);

export default cartRouter;