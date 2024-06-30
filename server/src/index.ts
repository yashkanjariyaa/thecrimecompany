import express, { Request, Response } from "express";
import connect from "./database/connection";
import { PORT } from "./config";

const app = express();
connect();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Node.js!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
