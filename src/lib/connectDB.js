const mongoose = require('mongoose');

export const mongodbConnect=async()=>{
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
    console.log("mongoos connect")
  } catch (error) {
    console.log(error)
  }
}