import { Router, Request, Response, NextFunction } from "express";
import authRouter from "./authRoutes";
import cartRouter from "./cartRoutes";
import orderRouter from "./orderRoutes";
import userDataRouter from "./userDataRoutes";
import productRouter from "./productRoutes";

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

router.use("/api/", authRouter);
router.use("/api/", cartRouter);
router.use("/api/", orderRouter);
router.use("/api/", userDataRouter);
router.use("/api/", productRouter);

export default router;
