import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { numberController } from "@/controllers/number.controller";

const app: Express = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/classify-number", numberController);

app.get("/test", (_req: Request, res: Response) => {
  res.json({ message: "Test successful" });
});

export default app;
