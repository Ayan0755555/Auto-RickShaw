const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const userRouter = require("./routes/index");
const cookieParser = require("cookie-parser");
const autoRouter = require("./routes/autoRouter");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api", userRouter);
app.use("/api/auto", autoRouter);

const PORT = 4000 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connect to db");
    console.log("Server is running", PORT);
  });
});
