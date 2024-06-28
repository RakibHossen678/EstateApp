import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";

const app = express();
app.use(express.json())
dotenv.config();

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Server is running!");
  console.log("DATABASE_URL:", process.env.DATABASE_URL);
});
