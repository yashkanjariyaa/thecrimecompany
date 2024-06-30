import express, { Request, Response } from "express";
import connect from "./database/connection";
import { PORT } from "./config";
import router from "./routes/routes";

const app = express();
app.use(express.json());
connect();

app.get("/", router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
