import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { errorHandler,notFound } from './middlewares/errorHandler.js';
import weatherRoutes from './routes/weatherRoutes.js';
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.set(express.urlencoded({extended:true}));
app.use('/api/weather',weatherRoutes);
app.use(notFound);
app.use(errorHandler);
const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})