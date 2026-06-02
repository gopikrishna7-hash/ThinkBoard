import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { connectDB } from "./config/db.js";

import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;

//middleware
app.use(
    cors({
        origin:"http://localhost:5173"
    })
);
app.use(express.json());
// app.use(rateLimiter);

//custom middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// })

app.use('/api/notes',notesRoutes);
app.use('/api/product',productRoutes);
app.use('/api/posts',productRoutes);

app.get('/reg',(req,res)=>{
    res.send("Regsistered")
});

//connecting to mongodb first by .then()


connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server started on PORT:",PORT)
});
});


