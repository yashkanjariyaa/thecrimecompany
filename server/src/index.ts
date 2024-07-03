import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import connect from "./database/connection";
import { PORT } from "./config";
import router from "./routes/routes";

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());
app.use(cors());

connect();

app.use("/", router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong!" });
});

app.use(express.static("public"));

// Start server
const HOST = process.env.HOST || "localhost";
const server = app.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});

//graceful shutdown
process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
