import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import globalErrorHandler from "./app/middwares/globalErrorhandler";
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://fitness-client-theta.vercel.app/",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Running !");
});
app.use(globalErrorHandler);

export default app;
