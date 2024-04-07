import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

import screenEntertainmentRoutes from "./domain/screenEntertainment/screenEntertainment.routes";

import "./factory";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/entertainment", screenEntertainmentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send(process.env);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
