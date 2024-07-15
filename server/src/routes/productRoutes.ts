import { Router } from "express";
import retrieveProducts from "../controllers/productController";

const productRouter = Router();

productRouter.get("/products", retrieveProducts);

export default productRouter;