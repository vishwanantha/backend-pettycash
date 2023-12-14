import express from 'express';
import dotenv from 'dotenv';
import router from './src/route/transaction.js'
import cors from 'cors'
dotenv.config();



const app=express();
app.use(cors())
app.use(express.json());
app.use('/api/v1',router)
const PORT= process.env.PORT
app.listen(PORT,()=>console.log(`App listenting port with ${PORT}`));