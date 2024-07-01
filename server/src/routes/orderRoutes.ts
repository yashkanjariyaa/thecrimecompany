import { Router } from "express";
import orderController from "../controllers/orderController";

const orderRouter = Router();

orderRouter.post("/register", orderController.RegisterOrder);

orderRouter.get("/retrieve", orderController.RetrieveOrderData);

export default orderRouter;