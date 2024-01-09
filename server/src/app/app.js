import express from "express";
import { userRouter } from "../router/userRouter.js";

const app = express();

app.use("/auth", userRouter);

export { app };
