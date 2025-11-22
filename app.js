import express from "express";
import cors from "cors";
import { userRouter } from "./src/routes/user.route.js";
import { globalErrorHandler } from "./src/utils/globalError.js";

export const app = express();

const appMiddware = [
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
];

app.use(globalErrorHandler);
app.use(appMiddware);
app.use("/api", userRouter);
