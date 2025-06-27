import { connection_String } from "@/app/component/utils/mongo_db";
import User from "@/app/models/user";
import { NextResponse } from "next/server";
export async function POST(req){
    try{
        await connection_String()  ; 
        const {email} = await req.json() ; 
        const user = await User.findOne({email}).select("_id") ; 
        return NextResponse.json({user}) ; 
    }catch(error){
        console.log("error occurred",error)
    }
}