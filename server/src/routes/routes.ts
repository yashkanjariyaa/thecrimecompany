import { Router, Request, Response, NextFunction } from "express";
import authRouter from "./authRoutes";
import cartRouter from "./cartRoutes";
import orderRouter from "./orderRoutes";
import userDataRouter from "./userDataRoutes";
import productRouter from "./productRoutes";
import { authenticate } from "../middlewares/JWT";

const router = Router();

router.use("/api", (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Node.js!");
});

router.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello, TypeScript with Node.js API!" });
});

router.use("/api/auth", authRouter);
router.use("/api/cart", cartRouter);
router.use("/api/order", authenticate, orderRouter);
router.use("/api/user", authenticate, userDataRouter);
router.use("/api/products", productRouter);

export default router;
