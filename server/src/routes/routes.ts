import { Router, Request, Response, NextFunction } from "express";

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

export default router;
