import mongoose from "mongoose";


const  productSchema = mongoose.Schema({
   title:String,
   price:String,
   image:String 
   
});

export default mongoose.model("product",productSchema);