import { Router } from "express";
import orderController from "../controllers/orderController";
import { authenticate } from "../middlewares/JWT";

const orderRouter = Router();

orderRouter.use(authenticate);

orderRouter.post("/place", orderController.RegisterOrder);

orderRouter.get("/retrieve/:orderId", orderController.RetrieveOrderData);

orderRouter.delete("/delete/:orderId", orderController.DeleteOrderData);

export default orderRouter;
