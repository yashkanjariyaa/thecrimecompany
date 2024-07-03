import { Router } from "express";
import orderController from "../controllers/orderController";

const orderRouter = Router();

orderRouter.post("/orders", orderController.RegisterOrder);

orderRouter.get("/orders/:orderId", orderController.RetrieveOrderData);

export default orderRouter;