import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // specify path if not in root
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.log("Express app ERROR:",err);
    });
    
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
        
    });
})
.catch((err)=>{
    console.log(("MONGODB connection FAILED !!!!:",err));
    
})