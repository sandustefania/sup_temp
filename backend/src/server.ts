import dotenv from "dotenv";
dotenv.config();
// process.env.MONGO_URI //i have access to .env file

import express from "express";
import cors from "cors";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import { dbConnect } from "./configs/database.config";

dbConnect();
const app = express();
app.use(express.json());

//cors for development time (localhost:4200--->localhost:5000)
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
