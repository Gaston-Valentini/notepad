import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { userRouter } from "../router/userRouter.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.use("/auth", userRouter);

export { app };
