import { db } from "@/lib/db"
import { data } from "autoprefixer"
import { NextResponse } from "next/server"
export async function POST() {

    try {
        
      const user = await db.user.update({
        where:{
            email: 'sahilsahoo23@gmail.com'
        },
        data: {
            role: 'USER'
        }
      }) 
     return NextResponse.json(user,  {status: 200})

    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }    
}