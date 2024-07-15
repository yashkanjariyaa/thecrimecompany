import { Router } from "express";
import cartController from "../controllers/cartController";

const cartRouter = Router();

cartRouter.post("/cart", cartController.StoreCartData);

cartRouter.put("/cart", cartController.UpdateCartData);

cartRouter.get("/cart", cartController.RetrieveCartData);

cartRouter.delete("/cart", cartController.DeleteCartData);

export default cartRouter;