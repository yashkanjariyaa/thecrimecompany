import { Router } from "express";
import retrieveProducts from "../controllers/productController";

const productRouter = Router();

productRouter.get("/", retrieveProducts);

export default productRouter;