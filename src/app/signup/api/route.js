import { mongodbConnect } from "@/lib/connectDB";
import User from "@/models/user";


export const POST = async (request) => {
  
  try {
   const {name,email,password} =await request.json();
   await mongodbConnect();
   User.create({name,email,password});
  return  Response.json({ message: "user Create" }, { status: 200 });
  } catch (error) {
   return Response.json({ message: "user not create" }, { status: 500 },{error});
  }
};
