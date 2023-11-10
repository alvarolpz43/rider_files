import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
         await mongoose.connect('mongodb+srv://dbalvaro:1234@cluster0.7fijvop.mongodb.net/archivos')
        console.log('DB connection established')
    }catch(err){
        console.log('Error connecting',err);
    }
}

export default connectDB;