import mongoose from "mongoose"; 

export const  connection_String = async()=>{
    try{
        await  mongoose.connect(process.env.MONGODB_URI)
    }catch(error){
        console.log("Mongo db string not found ", error) ; 
    }
}
