import { mongodbConnect } from "@/lib/connectDB";
import User from "@/models/user";
import bcrypt from "bcryptjs"

export const POST = async (request) => {
  
  try {
   const {name,email,password} =await request.json();
   const hansPassword=await bcrypt.hash(password,10)
   await mongodbConnect();
   const existUser=await User.findOne({email}).select("_id")
   console.log(existUser)
   if(existUser){
    return  Response.json({ message: "This dgfhgjhg" }, { status: 304 });
   }
   User.create({name,email,password:hansPassword});
  return  Response.json({ message: "user Create" }, { status: 200 });
  } catch (error) {
   return Response.json({ message: "user not create" }, { status: 500 },{error});
  }
};
