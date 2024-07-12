import { Router } from "express";
import orderController from "../controllers/orderController";
import { authenticate } from "../middlewares/JWT";

const orderRouter = Router();

orderRouter.use(authenticate);

orderRouter.post("/place", orderController.RegisterOrder);

orderRouter.get("/retrieve", orderController.RetrieveOrderData);

orderRouter.delete("/delete", orderController.DeleteOrderData);

export default orderRouter;
