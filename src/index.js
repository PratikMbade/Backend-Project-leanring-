import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';


dotenv.config({path: './env'});


app.get("/",(req,res)=>{
    res.send(`<h1>Hello ji</h1>`)
})

connectDB().then(()=>{

   app.listen(process.env.PORT,()=>{
    console.log("App is listening on ",process.env.PORT);
   })

})
.catch((error)=>{
    console.log("MongoDB connection failed in promise ",error)
})

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