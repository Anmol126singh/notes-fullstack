
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();



 export const connect = async()=>{

    try{
  

        await mongoose.connect(process.env.Mongo_URI)
        console.log("database initialized")}
    catch(err){
        console.log("failed",err);
        process.exit(1);
    }

    }
 