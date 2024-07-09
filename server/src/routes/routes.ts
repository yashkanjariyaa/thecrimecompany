import { Router, Request, Response, NextFunction } from "express";
import authRouter from "./authRoutes";
import cartRouter from "./cartRoutes";
import orderRouter from "./orderRoutes";
import userDataRouter from "./userDataRoutes";

const router = Router();

router.use("/api", (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("COntet-Type", "application/json");
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
router.use("/api/order", orderRouter);
router.use("/api/user", userDataRouter);

export default router;
