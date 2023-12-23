import mongoose from "mongoose";

import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try{
       const connectionDb = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDb Connected!! Db Host:${connectionDb.connection.host}`);

    }catch(error){
        console.log("Mongodb connection failed",error);
        process.exit(1);
    }
}
export default connectDB;