import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // specify path if not in root
import connectDB from "./db/index.js";

connectDB()