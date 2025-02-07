import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { numberService } from "@/services/numberService";

const app: Express = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/classify-number", numberService);

app.get("/test", (_req: Request, res: Response) => {
  res.json({ message: "Test successful" });
});

export default app;
