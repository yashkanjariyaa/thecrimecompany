import { Router } from "express";
import orderController from "../controllers/orderController";
import { authenticate } from "../middlewares/JWT";

const orderRouter = Router();

orderRouter.use(authenticate);

orderRouter.post("/order", orderController.RegisterOrder);

orderRouter.get("/order", orderController.RetrieveOrderData);

orderRouter.delete("/order", orderController.DeleteOrderData);

export default orderRouter;
