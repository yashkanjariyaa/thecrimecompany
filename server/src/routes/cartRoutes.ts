import { Router } from "express";
import cartController from "../controllers/cartController";

const cartRouter = Router();

cartRouter.post("/store", cartController.StoreCartData);

cartRouter.put("/update", cartController.UpdateCartData);

cartRouter.get("/retrieve", cartController.RetrieveCartData);

cartRouter.delete("/delete", cartController.DeleteCartData);

export default cartRouter;