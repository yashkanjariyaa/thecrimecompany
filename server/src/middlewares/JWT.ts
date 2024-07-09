import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { NextFunction, Response, Request } from "express";

interface User {
  userId: string;
  email: string;
}

interface CustomRequest extends Request {
  user?: User;
}

export const authenticate = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  try {
    if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
        if (err) {
          return res.status(403).json({ message: "Invalid token" });
        }

        req.user = user;
        next();
      });
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error:", err });
  }
};

export const authError = (
  err: any,
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("Invalid Token");
  } else {
    next(err);
  }
};

