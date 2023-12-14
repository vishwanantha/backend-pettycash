import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
try {
    mongoose.connect(`${process.env.DBURL}/${process.env.NAME}`)
    console.log('DB connected');
} catch (error) {
    console.log(error);
}
export default mongoose