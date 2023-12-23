
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import {DB_NAME} from "./constant.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB();




// import express from "express";

// const app = express()

// ;( async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",()=>{
//             console.log("Your database can't talk to expreess",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log("App is listing from",`${process.env.PORT}`);
//         })

//     }catch(error){
//         console.error("Conection Failed!",error)
//         throw error;
//     }
// } )()
