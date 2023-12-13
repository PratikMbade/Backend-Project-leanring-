import express from "express";
import dotenv from 'dotenv'
import connectDB from "./db/index.js";


dotenv.config({path: './env'});


connectDB();

//Approach -1 to connect DB

// IIF
// ( async () => {
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)  
//       app.on("error",(error)=>{
//         console.log("Error",error);
//       })

//       app.listen(process.env.PORT,()=>{
//         console.log(`App is listen on ${process.env.PORT}`)
//       })
//     } catch (error) {
//         console.log("DataBase connection has some issue",error);
//     }
// })