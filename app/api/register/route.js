import { connection_String } from "@/app/component/utils/mongo_db";
import User from "@/app/models/user";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";

export async function POST(req){
    try{    
     const {name , email  , password}    = await req.json() ; 
     const hashed = await bcrypt.hash(password , 10)
     await connection_String() ; 
     await User.create({name , email ,password:hashed}) ;
     return NextResponse.json({message:"user register"})
    }catch(error){
        return NextResponse.json({message:error})
    }
}