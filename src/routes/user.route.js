import { Router } from "express";
import { ApiResponse } from "../utils/apiResponse.js";
import { AppError } from "../utils/appError.js";
import { asyncError } from "../utils/asyncError.js";
import hljs from "highlight.js";

export const userRouter = Router();



userRouter.get("/hello", (req, res) => {
  ApiResponse.success(res, 200, "Hello World", { message: "Hello World" });
});



