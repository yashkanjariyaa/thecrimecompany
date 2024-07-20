import { Router } from "express";
import orderController from "../controllers/orderController";

const orderRouter = Router();

orderRouter.post("/", orderController.RegisterOrder);

orderRouter.get("/", orderController.RetrieveOrderData);

orderRouter.delete("/", orderController.DeleteOrderData);

export default orderRouter;
