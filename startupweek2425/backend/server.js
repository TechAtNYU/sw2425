import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js ";
import userRoutes from "./routes/user.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT 

app.use(express.json()); // allows us to parse json data in req.body

app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("server started at http://localhost:3000");
});

